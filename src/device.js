const { itemFetcherToArrayGetter } = require("./utilities")
const gql = require("graphql-tag")

class Device {
    constructor(client, id) {
        this.client = client
        this.id = id
    }

    static scalarFields() {
        return ["id", "name"]
    }

    get name() {
        return this.client
            .query({
                query: gql`
                    {
                        device(id:"${this.id}") {
                            id
                            name
                        }
                    }
                `,
            })
            .then(res => res.data.device.name)
    }
}

const getDevice = environmentId => (index, client) => {
    let promise = new Promise(async (resolve, reject) => {
        let envId = await environmentId

        client
            .query({
                query: gql`
                    {
                        environment(id:"${envId}"){
                            id
                            devices(offset:${index},limit:1){
                                id
                            }
                        }
                    }
                `,
            })
            .then(res =>
                resolve(
                    res.data.environment.devices.length === 0
                        ? undefined
                        : new Device(client, res.data.environment.devices[0].id)
                )
            )
    })

    const handler = {
        get: function(obj, prop) {
            if (Device.scalarFields().indexOf(prop) !== -1) {
                return promise.then(device =>
                    device ? device[prop] : undefined
                )
            } else {
                var value = obj[prop]
                return typeof value == "function" ? value.bind(obj) : value
            }
        },
    }

    return new Proxy(promise, handler)
}

module.exports = { Device, getDevice }
