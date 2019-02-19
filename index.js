const minimalGraphql = require("minimal-graphql")
const gql = require("graphql-tag")
const { itemFetcherToArrayGetter } = require("./utilities")

function Igloo(bearer) {
    const client = minimalGraphql({
        uri: "https://igloo-production.herokuapp.com/graphql",
        headers: {
            Authorization: "Bearer " + bearer,
        },
    })

    return {
        query: new Query(client),
        mutation: new Mutation(),
    }
}

class Query {
    constructor(client) {
        this.client = client
    }
    get user() {
        return new User(this.client)
    }
}

class User {
    constructor(client) {
        this.client = client
    }
    get id() {
        return this.client
            .query({
                query: gql`
                    {
                        user {
                            id
                        }
                    }
                `,
            })
            .then(res => res.data.user.id)
    }
    get name() {
        return this.client
            .query({
                query: gql`
                    {
                        user {
                            id
                            name
                        }
                    }
                `,
            })
            .then(res => res.data.user.name)
    }
    get environments() {
        return itemFetcherToArrayGetter(getEnvironment, this.client)
    }
}

class Environment {
    constructor(client, id) {
        this.client = client
        this.id = id
    }

    static scalarFields() {
        return ["id", "name"]
    }

    get name() {
        return this.client
            .query({
                query: gql`
                    {
                        environment(id:"${this.id}") {
                            id
                            name
                        }
                    }
                `,
            })
            .then(res => res.data.environment.name)
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

class Device {
    constructor(client, id) {
        this.client = client
        this.id = id
    }

    static scalarFields() {
        return ["id", "name"]
    }

    get name() {
        return this.client
            .query({
                query: gql`
                    {
                        device(id:"${this.id}") {
                            id
                            name
                        }
                    }
                `,
            })
            .then(res => res.data.device.name)
    }
}

const getDevice = environmentId => (index, client) => {
    let promise = new Promise(async (resolve, reject) => {
        let envId = await environmentId

        client
            .query({
                query: gql`
                    {
                        environment(id:"${envId}"){
                            id
                            devices(offset:${index},limit:1){
                                id
                            }
                        }
                    }
                `,
            })
            .then(res =>
                resolve(
                    res.data.environment.devices.length === 0
                        ? undefined
                        : new Device(client, res.data.environment.devices[0].id)
                )
            )
    })

    const handler = {
        get: function(obj, prop) {
            if (Device.scalarFields().indexOf(prop) !== -1) {
                return promise.then(device =>
                    device ? device[prop] : undefined
                )
            } else {
                var value = obj[prop]
                return typeof value == "function" ? value.bind(obj) : value
            }
        },
    }

    return new Proxy(promise, handler)
}

class Mutation {}

module.exports = Igloo
