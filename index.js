"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = void 0;
const graphql_request_1 = require("graphql-request");
const sdk_1 = require("./sdk");
function getSdk(token, options = {}) {
    const url = options.baseUrl || 'https://api.obniz.com/v1/graphql';
    const client = new graphql_request_1.GraphQLClient(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    return (0, sdk_1.getSdk)(client);
}
exports.getSdk = getSdk;
