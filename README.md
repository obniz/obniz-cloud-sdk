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

async function getDevices(token: string) {
  const obnizAPI = getSdk(token);
  const result = await obnizAPI.devices();
  for (const edge of result.devices!.edges) {
    const obniz = edge!.node!;
    console.log(obniz.id);
    console.log(obniz.description);
    console.log(obniz.osVersion);
    console.log(obniz.deviceLiveInfo?.isOnline);
    break;
  }
}

getDevices("token_XXXXXXXXXX")
```

```javascript
// for javascript
const getSdk = require('obniz-cloud-sdk').getSdk;

async function getDevices(token) {
  const obnizAPI = getSdk(token);
  const result = await obnizAPI.devices();
  for (const edge of result.devices.edges) {
    const obniz = edge.node;
    console.log(obniz.id);
    console.log(obniz.description);
    console.log(obniz.osVersion);
    console.log(obniz.deviceLiveInfo?.isOnline);
    break;
  }
}

getDevices("token_XXXXXXXXXX")
```
