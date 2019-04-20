// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                notification(id:"${obj.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.notification[key])

        return fetchedValues
    }
}

class Notification{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return ["id","device","content","date","read"]
    } 


    get id() {
        return this.propLoader.load("id")
    }
                    
    get content() {
        return this.propLoader.load("content")
    }
                    
    get date() {
        return this.propLoader.load("date")
    }
                    
    get read() {
        return this.propLoader.load("read")
    }
                    
}
            
module.exports = {Notification}
            