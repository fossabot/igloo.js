// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                permanentToken(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.permanentToken[key])

        return fetchedValues
    }
}

class PermanentToken{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","user","name","lastUsed"]
    } 


    get id() {
        return this.propLoader.load("id")
    }
                    
    get name() {
        return this.propLoader.load("name")
    }
                    
    get lastUsed() {
        return this.propLoader.load("lastUsed")
    }
                    
}
            
module.exports = {PermanentToken}
            