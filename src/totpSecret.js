// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                totpSecret(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.totpSecret[key])

        return fetchedValues
    }
}

class TotpSecret{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["secret","qrCode"]
    } 


    get secret() {
        return this.propLoader.load("secret")
    }
                    
    get qrCode() {
        return this.propLoader.load("qrCode")
    }
                    
}
            
module.exports = {TotpSecret}
            