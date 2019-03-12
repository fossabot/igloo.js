const { itemFetcherToArrayGetter } = require("./utilities")
const { getEnvironment } = require("./environment")
const gql = require("graphql-tag")

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

module.exports = User
