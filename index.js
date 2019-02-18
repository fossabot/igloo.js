const minimalGraphql = require("minimal-graphql")
const gql = require("graphql-tag")

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
}

class Mutation {}

module.exports = Igloo
