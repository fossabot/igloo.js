const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(device) {
    return async function(keys) {
        const response = await device.client.query({
            query: gql`
            {
                device(id:"${device.id}") {
                    id
                    ${keys.join("\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.device[key])

        return fetchedValues
    }
}

class Device {
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }

    static fields() {
        return [
            "name",
            "index",
            "myRole",
            "starred",
            "deviceType",
            "notificationCount",
            "online",
            "signalStatus",
            "batteryStatus",
            "batteryCharging",
            "firmware",
            "muted",
        ]
    }

    get name() {
        return this.propLoader.load("name")
    }
    get index() {
        return this.propLoader.load("index")
    }
    get myRole() {
        return this.propLoader.load("myRole")
    }
    get starred() {
        return this.propLoader.load("starred")
    }
    get deviceType() {
        return this.propLoader.load("deviceType")
    }
    get notificationCount() {
        return this.propLoader.load("notificationCount")
    }
    get online() {
        return this.propLoader.load("online")
    }
    get signalStatus() {
        return this.propLoader.load("signalStatus")
    }
    get batteryStatus() {
        return this.propLoader.load("batteryStatus")
    }
    get batteryCharging() {
        return this.propLoader.load("batteryCharging")
    }
    get firmware() {
        return this.propLoader.load("firmware")
    }
    get muted() {
        return this.propLoader.load("muted")
    }
}

const getDevice = environmentId =>
    genericGetter(
        async index =>
            gql(`
{
    environment(id:"${await environmentId}"){
        id
        devices(offset:${index},limit:1){
            id
        }
    }
}
`),
        "environment.devices",
        Device
    )

module.exports = { Device, getDevice }
