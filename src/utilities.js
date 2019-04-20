const dotProp = require("dot-prop")

function isNumeric(n) {
    return typeof n !== "symbol" && !isNaN(parseFloat(n)) && isFinite(n)
}

const fetcherToAsyncIterator = (fetcher, client) =>
    function() {
        let index = 0
        return {
            next: () =>
                fetcher(index, client).then(instance => {
                    index++
                    return instance === undefined
                        ? { done: true }
                        : {
                              value: instance,
                              done: false,
                          }
                }),
        }
    }

const itemFetcherToArrayGetter = (fetcher, client) => {
    const handler = {
        get: function(obj, prop) {
            if (isNumeric(prop)) {
                return fetcher(prop, client)
            } else if (prop === Symbol.asyncIterator) {
                return fetcherToAsyncIterator(fetcher, client)
            } else {
                return obj[prop]
            }
        },
    }

    const lazyLoader = new Proxy({}, handler)
    return lazyLoader
}

const genericGetter = (indexToQuery, path, Wrapper) => (index, client) => {
    let promise = new Promise(async (resolve, reject) => {
        const res = await client.query({
            query: await indexToQuery(index),
        })

        const parsedRes = dotProp.get(res.data, path)
        resolve(
            parsedRes.length === 0
                ? undefined
                : new Wrapper(client, parsedRes[0].id)
        )
    })

    const handler = {
        get: function(obj, prop) {
            if (Wrapper.fields().indexOf(prop) !== -1) {
                return promise.then(environment =>
                    environment ? environment[prop] : undefined
                )
            } else {
                var value = obj[prop]
                return typeof value == "function" ? value.bind(obj) : value
            }
        },
    }

    return new Proxy(promise, handler)
}

module.exports = {
    fetcherToAsyncIterator,
    itemFetcherToArrayGetter,
    genericGetter,
}
