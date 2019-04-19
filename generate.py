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


def getTypename(type):
    if type["kind"] != "NON_NULL":
        return type["name"]
    else:
        return getTypename(type["ofType"])


unit = "    "


def indent(string, n):
    return "\n".join([unit*n + str for str in string.split("\n")])


def create_query(mutation):
    arg_names = [arg["name"] for arg in mutation["args"]]
    query_args = ",".join([arg+"_arg" for arg in arg_names])

    returnValue = "{id}" if mutation["type"]["kind"] == "OBJECT" or mutation["type"]["kind"] == "INTERFACE" else ""
    query = """mutation{%s(%s)%s}""" % (
        mutation["name"],
        "".join("${%s}" % (arg["name"]+"_arg") for arg in mutation["args"]),
        returnValue
    )

    return "`{query}`".format(query=query)


def create_handler(mutation):
    required_args = [arg["name"] for arg in mutation["args"]
                     if arg["type"]["kind"] == "NON_NULL"]
    optional_args = [arg["name"] for arg in mutation["args"]
                     if arg["type"]["kind"] != "NON_NULL"]

    args_type = {arg["name"]: getTypename(
        arg["type"]) for arg in mutation["args"]}

    def arg_to_string(arg_name):
        arg_type = args_type[arg_name]
        if arg_type == "String" or arg_type == "ID":
            return '%s:"${%s}",' % (arg_name, arg_name)
        else:
            return '%s:${%s},' % (arg_name, arg_name)

    func_args_list = ", ".join([*required_args, *optional_args])
    parsed_required_args = "\n".join(["if({name} === undefined) throw new Error('{name} is a required argument')\nconst {name}_arg = `{arg_string}`".format(
        name=arg, arg_string=arg_to_string(arg)) for arg in required_args])
    parsed_optional_args = "\n".join(["const {name}_arg = {name} ? `{arg_string}` : ''".format(
        name=arg, arg_string=arg_to_string(arg)) for arg in optional_args])

    return """
    async {name} ({{ {func_args_list} }} ) {{
{parsed_required_args}
{parsed_optional_args}
        return this.client.mutate({{ mutation:gql({query}) }}).then(res=>res.data.{name})
        }}
    """.format(name=mutation["name"],
               parsed_required_args=indent(parsed_required_args, 2),
               parsed_optional_args=indent(parsed_optional_args, 2),
               query=create_query(mutation),
               func_args_list=func_args_list,
               query_args=""
               )


with open("mutation.js", "w") as f:
    f.write("""// programmatically generated file

const gql = require("graphql-tag")

module.exports = class Mutation {
    constructor(client) {
        this.client = client
    }
""")

    for mutation in introspection["mutationType"]["fields"]:
        f.write(create_handler(mutation))

    f.write("}")
