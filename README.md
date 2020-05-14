# obniz-cloud-sdk

## 開発手順

[GraphQL Codegen](https://github.com/dotansimha/graphql-code-generator)を用いてGraphQL queryからSDKを生成しています。  
そのため、SDKの機能追加・編集にあたっては`query.graphql`を編集します。  

以下のコマンドで`query.graphql`をもとに`sdk.ts`が生成されます。
```bash
npm run codegen
```

さらに、`tsc`コマンドでコンパイルすることで`sdk.js`が生成されます。

## 使用例

```TypeScript
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';

async function getWebApp(token: string) {
    const uri = "https://api.obniz.io/v1/graphql";
    const client = new GraphQLClient(uri, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const sdk = getSdk(client);
    const webapp = await sdk.webapp();
}
```