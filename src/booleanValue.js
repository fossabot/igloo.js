// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                booleanValue(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.booleanValue[key])

        return fetchedValues
    }
}

class BooleanValue{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","createdAt","updatedAt","device","permission","visibility","myRole","value","cardSize","name","index"]
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
                    
    get cardSize() {
        return this.propLoader.load("cardSize")
    }
                    
    get name() {
        return this.propLoader.load("name")
    }
                    
    get index() {
        return this.propLoader.load("index")
    }
                    
}
            
module.exports = {BooleanValue}
            