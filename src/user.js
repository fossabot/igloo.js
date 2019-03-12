const { itemFetcherToArrayGetter } = require("./utilities")
const { getEnvironment } = require("./environment")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(user) {
    return async function(keys) {
        const response = await user.client.query({
            query: gql`
            
            {
                user {
                    id
                    ${keys.join("\n")}
                }
            }
            
        `,
        })
        const fetchedValues = keys.map(key => response.data.user[key])

        return fetchedValues
    }
}
class User {
    constructor(client) {
        this.client = client
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    get id() {
        return this.propLoader.load("id")
    }
    get name() {
        return this.propLoader.load("name")
    }
    get email() {
        return this.propLoader.load("email")
    }
    get quietMode() {
        return this.propLoader.load("quietMode")
    }
    get monthUsage() {
        return this.propLoader.load("monthUsage")
    }
    get paymentPlan() {
        return this.propLoader.load("paymentPlan")
    }
    get usageCap() {
        return this.propLoader.load("usageCap")
    }
    get profileIcon() {
        return this.propLoader.load("profileIcon")
    }
    get profileIconColor() {
        return this.propLoader.load("profileIconColor")
    }
    get emailIsVerified() {
        return this.propLoader.load("emailIsVerified")
    }
    get notificationCount() {
        return this.propLoader.load("notificationCount")
    }
    get environmentCount() {
        return this.propLoader.load("environmentCount")
    }
    get primaryAuthenticationMethods() {
        return this.propLoader.load("primaryAuthenticationMethods")
    }
    get secondaryAuthenticationMethods() {
        return this.propLoader.load("secondaryAuthenticationMethods")
    }
    get pendingEnvironmentShareCount() {
        return this.propLoader.load("pendingEnvironmentShareCount")
    }
    get pendingOwnerChangeCount() {
        return this.propLoader.load("pendingOwnerChangeCount")
    }
    get environmentCount() {
        return this.propLoader.load("environmentCount")
    }
    get deviceCount() {
        return this.propLoader.load("deviceCount")
    }
    get valueCount() {
        return this.propLoader.load("valueCount")
    }
    get notificationCount() {
        return this.propLoader.load("notificationCount")
    }
    get permanentTokenCount() {
        return this.propLoader.load("permanentTokenCount")
    }

    get environments() {
        return itemFetcherToArrayGetter(getEnvironment, this.client)
    }
}

module.exports = User
