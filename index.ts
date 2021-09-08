import { GraphQLClient } from 'graphql-request';
import { getSdk as get, Sdk } from './sdk';

export interface SdkOption {
  baseUrl?: string;
}

export function getSdk(token: string, options: SdkOption = {}): Sdk {
  const url = options.baseUrl || 'https://api.obniz.io/v1/graphql';
  const client = new GraphQLClient(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return get(client);
}
