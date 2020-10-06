"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("./sdk");
function get(token) {
    const uri = "https://api.obniz.io/v1/graphql";
    const client = new graphql_request_1.GraphQLClient(uri, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return sdk_1.getSdk(client);
}
exports.get = get;
