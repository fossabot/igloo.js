// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                pendingEnvironmentShare(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.pendingEnvironmentShare[key])

        return fetchedValues
    }
}

class PendingEnvironmentShare{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","sender","receiver","role","environment"]
    } 


    get id() {
        return this.propLoader.load("id")
    }
                    
    get role() {
        return this.propLoader.load("role")
    }
                    
}
            
module.exports = {PendingEnvironmentShare}
            