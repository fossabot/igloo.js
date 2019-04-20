// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                stringValue(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.stringValue[key])

        return fetchedValues
    }
}

class StringValue {
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }

    static fields() {
        return [
            "id",
            "createdAt",
            "updatedAt",
            "device",
            "permission",
            "visibility",
            "myRole",
            "value",
            "maxChars",
            "cardSize",
            "index",
            "name",
            "allowedValues",
        ]
    }

    get id() {
        return this.propLoader.load("id")
    }

    get createdAt() {
        return this.propLoader.load("createdAt")
    }

    get updatedAt() {
        return this.propLoader.load("updatedAt")
    }

    get permission() {
        return this.propLoader.load("permission")
    }

    get visibility() {
        return this.propLoader.load("visibility")
    }

    get myRole() {
        return this.propLoader.load("myRole")
    }

    get value() {
        return this.propLoader.load("value")
    }

    get maxChars() {
        return this.propLoader.load("maxChars")
    }

    get cardSize() {
        return this.propLoader.load("cardSize")
    }

    get index() {
        return this.propLoader.load("index")
    }

    get name() {
        return this.propLoader.load("name")
    }

    get allowedValues() {
        return this.propLoader.load("allowedValues")
    }
}

module.exports = { StringValue }
