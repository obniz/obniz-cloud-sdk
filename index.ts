import { GraphQLClient } from 'graphql-request';
import { getSdk as get } from './sdk';

export function getSdk(token: string) {
    const uri = "https://api.obniz.io/v1/graphql";
    const client = new GraphQLClient(uri, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return get(client);
}