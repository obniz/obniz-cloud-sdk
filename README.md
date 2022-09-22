# obniz-cloud-sdk

[About obniz GraphQL API](https://obniz.com/doc/reference/cloud/cloudapi)

[api.obniz.com](https://api.obniz.io/v1/graphql)

を利用するための SDK です。

## install

```shell
npm i obniz-cloud-sdk
```

## Usage

```TypeScript
// Type Script
import { getSdk } from 'obniz-cloud-sdk';

async function getApp(token: string) {
    const sdk = getSdk(token);
    const app = await sdk.app();
    console.log(app);
}

getApp("apptoken_XXXXX")
```

```javascript
// for javascript
const getSdk = require('obniz-cloud-sdk').getSdk;

async function getApp(token) {
  const sdk = getSdk(token);
  const app = await sdk.app();
  console.log(app);
}

getApp('apptoken_XXXXX');
```
