const minimalGraphql = require("minimal-graphql")
const { User } = require("./user")
const { Environment } = require("./environment")
const { Device } = require("./device")
const Mutation = require("./mutation")

class GraphQLError extends Error {
    constructor(message, e) {
        super(message)
        this.fullError = e
    }
}

class Igloo {
    constructor(bearer) {
        this.client = minimalGraphql({
            uri: "https://iglooql.herokuapp.com/graphql",
            headers: {
                Authorization: "Bearer " + bearer,
            },
            fetchPolicy: "no-cache",
        })

        const _query = this.client.query
        this.client.query = (...args) =>
            _query(...args).catch(e => {
                if (
                    e.networkError &&
                    e.networkError.result &&
                    e.networkError.result.errors &&
                    e.networkError.result.errors.length !== 0
                ) {
                    throw new Error(e.networkError.result.errors[0].message, e)
                } else {
                    throw e
                }
            })

        const _mutate = this.client.mutate
        this.client.mutate = (...args) =>
            _mutate(...args).catch(e => {
                if (
                    e.networkError &&
                    e.networkError.result &&
                    e.networkError.result.errors &&
                    e.networkError.result.errors.length !== 0
                ) {
                    throw new GraphQLError(
                        e.networkError.result.errors[0].message,
                        e
                    )
                } else {
                    throw e
                }
            })
    }

    get query() {
        return new Query(this.client)
    }
    get mutation() {
        return new Mutation(this.client)
    }
}

class Query {
    constructor(client) {
        this.client = client
    }
    get user() {
        return new User(this.client)
    }

    environment(id) {
        return new Environment(this.client, id)
    }

    device(id) {
        return new Device(this.client, id)
    }
}

module.exports = Igloo
