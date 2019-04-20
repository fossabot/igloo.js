// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                settings(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.settings[key])

        return fetchedValues
    }
}

class Settings{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","lengthAndMass","temperature","timeFormat","dateFormat","language","passwordChangeEmail","pendingOwnerChangeReceivedEmail","pendingEnvironmentShareReceivedEmail","pendingOwnerChangeAcceptedEmail","pendingEnvironmentShareAcceptedEmail","permanentTokenCreatedEmail"]
    } 


    get id() {
        return this.propLoader.load("id")
    }
                    
    get lengthAndMass() {
        return this.propLoader.load("lengthAndMass")
    }
                    
    get temperature() {
        return this.propLoader.load("temperature")
    }
                    
    get timeFormat() {
        return this.propLoader.load("timeFormat")
    }
                    
    get dateFormat() {
        return this.propLoader.load("dateFormat")
    }
                    
    get language() {
        return this.propLoader.load("language")
    }
                    
    get passwordChangeEmail() {
        return this.propLoader.load("passwordChangeEmail")
    }
                    
    get pendingOwnerChangeReceivedEmail() {
        return this.propLoader.load("pendingOwnerChangeReceivedEmail")
    }
                    
    get pendingEnvironmentShareReceivedEmail() {
        return this.propLoader.load("pendingEnvironmentShareReceivedEmail")
    }
                    
    get pendingOwnerChangeAcceptedEmail() {
        return this.propLoader.load("pendingOwnerChangeAcceptedEmail")
    }
                    
    get pendingEnvironmentShareAcceptedEmail() {
        return this.propLoader.load("pendingEnvironmentShareAcceptedEmail")
    }
                    
    get permanentTokenCreatedEmail() {
        return this.propLoader.load("permanentTokenCreatedEmail")
    }
                    
}
            
module.exports = {Settings}
            