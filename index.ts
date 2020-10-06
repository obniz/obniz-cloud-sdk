import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';

export function get(token: string) {
    const uri = "https://api.obniz.io/v1/graphql";
    const client = new GraphQLClient(uri, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return getSdk(client);
}