const minimalGraphql = require("minimal-graphql")
const gql = require("graphql-tag")

function isNumeric(n) {
    return typeof n !== "symbol" && !isNaN(parseFloat(n)) && isFinite(n)
}

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
        const client = this.client

        const handler = {
            get: function(obj, prop) {
                if (isNumeric(prop)) {
                    return getEnvironment(prop, client)
                } else if (prop === Symbol.asyncIterator) {
                    return function() {
                        let index = 0
                        return {
                            next: () =>
                                getEnvironment(index, client).then(
                                    environment => {
                                        index++
                                        return environment === undefined
                                            ? { done: true }
                                            : {
                                                  value: environment,
                                                  done: false,
                                              }
                                    }
                                ),
                        }
                    }
                } else {
                    return obj[prop]
                }
            },
        }

        var lazyLoader = new Proxy({}, handler)
        return lazyLoader
    }
}

class Environment {
    constructor(client, id) {
        this.client = client
        this.id = id
    }

    static fields() {
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
}

const getEnvironment = (index, client) => {
    let promise = client
        .query({
            query: gql`
                    {
                        user {
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

    Environment.fields().forEach(field => {
        promise[field] = promise.then(environment =>
            environment ? environment[field] : undefined
        )
    })

    return promise
}

class Mutation {}

module.exports = Igloo
