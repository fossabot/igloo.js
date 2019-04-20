const Igloo = require("./src/index")
const bearer =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiJmODFhODQ3Zi1mZDAyLTQzMDgtOWY3Zi02MTNkZjQ2OTUyNzMiLCJ0b2tlbklkIjoiNTVjYTQwMTEtNzdiNC00NDUzLWI2NjktYTk4MTkzMzVkYmM1IiwiYWNjZXNzTGV2ZWwiOiJERVZJQ0UiLCJ0b2tlblR5cGUiOiJQRVJNQU5FTlQifQ.1D6vR1zzEXmwxMdmukR-5cQ7qMhA2MTnO2f-M0nv8QgGaT8H5jUxzIDk_hjX3Faem5_Uy2Q-7zwRnXkY8306Hw"

async function main() {
    const igloo = new Igloo(bearer)
    await igloo.mutation.user({ name: "Ohi" })
    const user = igloo.query.user

    console.log(await user.name)
    for await (let environment of user.environments) {
        console.log(`- ${await environment.name} (${await environment.id})`)
        for await (device of environment.devices) {
            console.log(`  - ${await device.name} (${await device.id})`)
        }
    }

    // console.log(
    //     await igloo.query.device("2c39becb-275c-47cf-af4b-dc6f34acc5ce").name
    // )
}

main().catch(console.log)
