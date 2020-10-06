# obniz-cloud-sdk

[About obniz GraphQL API](https://obniz.com/doc/reference/cloud/cloudapi)

[api.obniz.com](https://api.obniz.io/v1/graphql)

を利用するためのSDKです。

```TypeScript
// Type Script
import { get } from 'obniz-cloud-sdk';

async function getApp(token: string) {
    const sdk = getSDK(token);
    const app = await sdk.app();
    console.log(app);
}
```

```javascript
// for javascript
const getSDK = require('./index').get

async function getApp(token) {
    const sdk = getSDK(token);
    const app = await sdk.app();
    console.log(app);
}
```