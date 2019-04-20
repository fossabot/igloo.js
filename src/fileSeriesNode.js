// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                fileSeriesNode(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.fileSeriesNode[key])

        return fetchedValues
    }
}

class FileSeriesNode{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","device","series","timestamp","value","mimeType","fileName"]
    } 


    get id() {
        return this.propLoader.load("id")
    }
                    
    get timestamp() {
        return this.propLoader.load("timestamp")
    }
                    
    get value() {
        return this.propLoader.load("value")
    }
                    
    get mimeType() {
        return this.propLoader.load("mimeType")
    }
                    
    get fileName() {
        return this.propLoader.load("fileName")
    }
                    
}
            
module.exports = {FileSeriesNode}
            