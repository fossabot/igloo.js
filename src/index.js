const minimalGraphql = require("minimal-graphql")
const { User } = require("./user")
const { Environment } = require("./environment")
const { Device } = require("./device")

function Igloo(bearer) {
    const client = minimalGraphql({
        uri: "https://iglooql.herokuapp.com/graphql",
        headers: {
            Authorization: "Bearer " + bearer,
        },
        // fetchPolicy: "no-cache",
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

    environment(id) {
        return new Environment(this.client, id)
    }

    device(id) {
        return new Device(this.client, id)
    }
}

class Mutation {}

module.exports = Igloo
