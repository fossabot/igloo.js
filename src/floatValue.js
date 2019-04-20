// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                floatValue(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.floatValue[key])

        return fetchedValues
    }
}

class FloatValue{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","createdAt","updatedAt","device","permission","visibility","myRole","unitOfMeasurement","value","precision","min","max","cardSize","index","name"]
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
                    
    get unitOfMeasurement() {
        return this.propLoader.load("unitOfMeasurement")
    }
                    
    get value() {
        return this.propLoader.load("value")
    }
                    
    get precision() {
        return this.propLoader.load("precision")
    }
                    
    get min() {
        return this.propLoader.load("min")
    }
                    
    get max() {
        return this.propLoader.load("max")
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
                    
}
            
module.exports = {FloatValue}
            