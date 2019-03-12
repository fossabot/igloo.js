const { itemFetcherToArrayGetter } = require("./utilities")
const { getDevice } = require("./device")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(environment) {
    return async function(keys) {
        const response = await environment.client.query({
            query: gql`
            {
                environment(id:"${environment.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })
        const fetchedValues = keys.map(
            key => response.data.environment[key] || null
        )

        return fetchedValues
    }
}

class Environment {
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }

    static scalarFields() {
        return [
            "myRole",
            "pendingEnvironmentShareCount",
            "pendingOwnerChangeCount",
            "name",
            "picture",
            "deviceCount",
            "notificationCount",
            "index",
            "muted",
        ]
    }

    get myRole() {
        return this.propLoader.load("myRole")
    }

    get pendingEnvironmentShareCount() {
        return this.propLoader.load("pendingEnvironmentShareCount")
    }

    get pendingOwnerChangeCount() {
        return this.propLoader.load("pendingOwnerChangeCount")
    }

    get name() {
        return this.propLoader.load("name")
    }

    get picture() {
        return this.propLoader.load("picture")
    }

    get deviceCount() {
        return this.propLoader.load("deviceCount")
    }

    get notificationCount() {
        return this.propLoader.load("notificationCount")
    }

    get index() {
        return this.propLoader.load("index")
    }

    get muted() {
        return this.propLoader.load("muted")
    }

    get devices() {
        return itemFetcherToArrayGetter(getDevice(this.id), this.client)
    }
}

const getEnvironment = (index, client) => {
    let promise = client
        .query({
            query: gql`
                    {
                        user {
                            id
                            environments(offset:${index},limit:1){
                                id
                            }
                        }
                    }
                `,
        })
        .then(res =>
            res.data.user.environments.length === 0
                ? undefined
                : new Environment(client, res.data.user.environments[0].id)
        )

    const handler = {
        get: function(obj, prop) {
            if (prop === "devices") {
                return itemFetcherToArrayGetter(
                    getDevice(
                        promise.then(environment =>
                            environment ? environment.id : undefined
                        )
                    ),
                    client
                )
            } else if (Environment.scalarFields().indexOf(prop) !== -1) {
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

module.exports = { Environment, getEnvironment }
