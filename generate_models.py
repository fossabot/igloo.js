import json
import requests

with open("introspection.gql") as f:
    query = f.read()

url = "https://bering.igloo.ooo/graphql"
payload = {"query": query}
headers = {
    'content-type': "application/json"
}
response = requests.request(
    "POST", url, data=json.dumps(payload), headers=headers)

parsedRes = json.loads(response.text)
if "errors" in parsedRes.keys():
    raise Exception(parsedRes["errors"][0]["message"])

introspection = parsedRes["data"]["__schema"]


def camelcase(string):
    return string[0].lower() + string[1:]


def getFieldsArray(model):
    return "["+",".join(['"%s"' % field["name"]
                         for field in model["fields"]]) + "]"


def is_scalar(type):
    return type["kind"] != "OBJECT" and type["kind"] != "INTERFACE" and (type["kind"] != "NON_NULL" or is_scalar(type["ofType"]))


for model in introspection["types"]:
    if model["kind"] == "OBJECT" and model["name"][0] != model["name"].lower()[0] and model["name"] not in ["Query", "Mutation", "Subscription"]:
        with open("models/{}.js".format(camelcase(model["name"])), "w+") as f:
            f.write("""// programmatically generated file
const { itemFetcherToArrayGetter, genericGetter } = require("./utilities")
const gql = require("graphql-tag")
const DataLoader = require("dataloader")

function batchPropGetter(obj) {
    return async function(keys) {
        const response = await obj.client.query({
            query: gql`
            {
                %s(id:"${obj.id}") {
                    id
                    ${keys.join("\\n")}
                }
            }
        `,
        })

        const fetchedValues = keys.map(key => response.data.%s[key])

        return fetchedValues
    }
}

class % s{
    constructor(client, id) {
        this.client = client
        this.id = id
        this.propLoader = new DataLoader(batchPropGetter(this))
    }
    
    static fields() {
        return %s
    } 

""" % (camelcase(model["name"]), camelcase(model["name"]), model["name"], getFieldsArray(model)))

            for field in model["fields"]:
                if is_scalar(field["type"]):
                    f.write("""
    get %s() {
        return this.propLoader.load("%s")
    }
                    """ % (field["name"], field["name"]))

            f.write("""
}
            
module.exports = {%s}
            """ % model["name"])
