const Igloo = require("./index")
const bearer =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NTExMzI3MDUsInVzZXJJZCI6IjljMzg3MzliLTYzOTktNDQ1Ni04MWFkLTA2YTQyMDBkODA2NiIsImFjY2Vzc0xldmVsIjoiT1dORVIiLCJ0b2tlblR5cGUiOiJURU1QT1JBUlkifQ.jN_7939Qe2T2b0y5jWL6Km0YxLcn8iiEEucH8dwcCUM9QCBnMCOaR7IXji-Nx9-qzF9z5s5sPY5GbSfYHC2QUg"

async function main() {
    const igloo = Igloo(bearer)
    const user = igloo.query.user

    console.log(await user.name)
    for await (let environment of user.environments) {
        console.log("- " + (await environment.name))
        for await (device of environment.devices) {
            console.log("  - " + (await device.name))
        }
    }

    console.log(await user.environments[0].devices[0].name)
}

main()
