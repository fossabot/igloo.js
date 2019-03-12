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

module.exports = {
    fetcherToAsyncIterator,
    itemFetcherToArrayGetter: itemFetcherToArrayGetter,
}
