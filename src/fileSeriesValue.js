// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                fileSeriesValue(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.fileSeriesValue[key])

        return fetchedValues
    }
}

class FileSeriesValue{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","createdAt","updatedAt","device","visibility","myRole","nodeCount","nodes","lastNode","cardSize","name","index","allowedMimeTypes"]
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
                    
    get nodeCount() {
        return this.propLoader.load("nodeCount")
    }
                    
    get nodes() {
        return this.propLoader.load("nodes")
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
                    
    get allowedMimeTypes() {
        return this.propLoader.load("allowedMimeTypes")
    }
                    
}
            
module.exports = {FileSeriesValue}
            