const Igloo = require("./src/index")
const bearer =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NTMwMzI3MjMsInVzZXJJZCI6ImYxMDJkZWFjLTBkZDItNDBlZC05Mzg1LWUzMjdiMzQzZjZmZSIsImFjY2Vzc0xldmVsIjoiT1dORVIiLCJ0b2tlblR5cGUiOiJURU1QT1JBUlkifQ.PhdPFHqrL357VuQkIidbJ_DgIBprtRVfGGVv-I_SlewB8ciyns6-qmUrMQ52FdhKHFJNsfsp71p6Pa5jahB33A"

async function main() {
    const igloo = Igloo(bearer)
    const user = igloo.query.user

    const name = user.environments[0].name
    const picture = user.environments[0].picture
    console.log(await user.name)
    console.log(await name, await picture)
    // console.log(await user.name)
    // for await (let environment of user.environments) {
    //     console.log("- " + (await environment.name))
    //     for await (device of environment.devices) {
    //         console.log("  - " + (await device.name))
    //     }
    // }

    // console.log(await user.environments[0].devices[0].name)
}

main()
