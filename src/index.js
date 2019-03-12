const minimalGraphql = require("minimal-graphql")
const User = require("./user")

function Igloo(bearer) {
    const client = minimalGraphql({
        uri: "https://iglooql.herokuapp.com/graphql",
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

class Mutation {}

module.exports = Igloo
