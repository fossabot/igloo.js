// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                webauthnChallenge(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.webauthnChallenge[key])

        return fetchedValues
    }
}

class WebauthnChallenge{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["publicKeyOptions","jwtChallenge"]
    } 


    get publicKeyOptions() {
        return this.propLoader.load("publicKeyOptions")
    }
                    
    get jwtChallenge() {
        return this.propLoader.load("jwtChallenge")
    }
                    
}
            
module.exports = {WebauthnChallenge}
            