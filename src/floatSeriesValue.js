// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                floatSeriesValue(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.floatSeriesValue[key])

        return fetchedValues
    }
}

class FloatSeriesValue{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","createdAt","updatedAt","device","visibility","myRole","unitOfMeasurement","nodeCount","nodes","lastNode","precision","min","max","cardSize","name","index","threshold"]
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
                    
    get visibility() {
        return this.propLoader.load("visibility")
    }
                    
    get myRole() {
        return this.propLoader.load("myRole")
    }
                    
    get unitOfMeasurement() {
        return this.propLoader.load("unitOfMeasurement")
    }
                    
    get nodeCount() {
        return this.propLoader.load("nodeCount")
    }
                    
    get nodes() {
        return this.propLoader.load("nodes")
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
                    
    get name() {
        return this.propLoader.load("name")
    }
                    
    get index() {
        return this.propLoader.load("index")
    }
                    
    get threshold() {
        return this.propLoader.load("threshold")
    }
                    
}
            
module.exports = {FloatSeriesValue}
            