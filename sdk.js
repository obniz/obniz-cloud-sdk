"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.DeleteDeviceAccessTokenDocument = exports.GenerateDeviceAccessTokenDocument = exports.UninstallAppDocument = exports.UpdateDeviceSettingsForInstalledAppDocument = exports.InstallAppDocument = exports.RegistrateDeviceDocument = exports.AppEventsDocument = exports.EventsDocument = exports.DevicesDocument = exports.UserDocument = exports.AppDocument = exports.WebappDocument = exports.EventEdgeFieldsFragmentDoc = exports.DeviceEdgeFieldsFragmentDoc = exports.DeviceLiveInfoFieldsFragmentDoc = exports.ConnectedNetworkFieldsFragmentDoc = exports.WifimeshFieldsFragmentDoc = exports.WifiFieldsFragmentDoc = exports.AppInstallEdgeFieldsFragmentDoc = exports.InstallEdgeFieldsFragmentDoc = exports.PageInfoFieldsFragmentDoc = void 0;
const graphql_1 = require("graphql");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.PageInfoFieldsFragmentDoc = graphql_tag_1.default `
    fragment pageInfoFields on pageInfo {
  hasPreviousPage
  hasNextPage
}
    `;
exports.InstallEdgeFieldsFragmentDoc = graphql_tag_1.default `
    fragment installEdgeFields on installEdge {
  node {
    id
    configs
    createdAt
    updatedAt
    user {
      id
      name
      email
      picture
      plan
      createdAt
      credit
    }
  }
}
    `;
exports.AppInstallEdgeFieldsFragmentDoc = graphql_tag_1.default `
    fragment appInstallEdgeFields on appInstallEdge {
  node {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    user {
      id
      name
      email
      picture
      plan
      createdAt
      credit
    }
    configs
  }
}
    `;
exports.WifiFieldsFragmentDoc = graphql_tag_1.default `
    fragment wifiFields on wifi {
  ssid
  macAddress
  rssi
}
    `;
exports.WifimeshFieldsFragmentDoc = graphql_tag_1.default `
    fragment wifimeshFields on wifimesh {
  meshid
  parent_obniz_id
  root_obniz_id
  layer
  rssi
}
    `;
exports.ConnectedNetworkFieldsFragmentDoc = graphql_tag_1.default `
    fragment connectedNetworkFields on connectedNetwork {
  online_at
  net
  local_ip
  global_ip
  wifi {
    ...wifiFields
  }
  wifimesh {
    ...wifimeshFields
  }
}
    ${exports.WifiFieldsFragmentDoc}
${exports.WifimeshFieldsFragmentDoc}`;
exports.DeviceLiveInfoFieldsFragmentDoc = graphql_tag_1.default `
    fragment deviceLiveInfoFields on deviceLiveInfo {
  isOnline
  onlineAt
  offlineAt
  connectedNetwork {
    ...connectedNetworkFields
  }
}
    ${exports.ConnectedNetworkFieldsFragmentDoc}`;
exports.DeviceEdgeFieldsFragmentDoc = graphql_tag_1.default `
    fragment deviceEdgeFields on deviceEdge {
  node {
    id
    access_token
    description
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    pingInterval
    deviceLiveInfo {
      ...deviceLiveInfoFields
    }
  }
}
    ${exports.DeviceLiveInfoFieldsFragmentDoc}`;
exports.EventEdgeFieldsFragmentDoc = graphql_tag_1.default `
    fragment eventEdgeFields on eventEdge {
  node {
    id
    name
    trigger
    action
    webhookUri
    createdAt
  }
}
    `;
exports.WebappDocument = graphql_tag_1.default `
    query webapp($first: first, $skip: skip) {
  webapp {
    id
    title
    short_body
    type
    store_status
    installs(first: $first, skip: $skip) {
      totalCount
      pageInfo {
        ...pageInfoFields
      }
      edges {
        ...installEdgeFields
      }
    }
  }
}
    ${exports.PageInfoFieldsFragmentDoc}
${exports.InstallEdgeFieldsFragmentDoc}`;
exports.AppDocument = graphql_tag_1.default `
    query app($first: first, $skip: skip) {
  app {
    id
    title
    short_body
    type
    store_status
    installs(first: $first, skip: $skip) {
      totalCount
      pageInfo {
        ...pageInfoFields
      }
      edges {
        ...appInstallEdgeFields
      }
    }
  }
}
    ${exports.PageInfoFieldsFragmentDoc}
${exports.AppInstallEdgeFieldsFragmentDoc}`;
exports.UserDocument = graphql_tag_1.default `
    query user {
  user {
    id
    name
    email
    picture
    plan
    credit
    createdAt
  }
}
    `;
exports.DevicesDocument = graphql_tag_1.default `
    query devices($first: first, $skip: skip, $id: String, $hw: String, $app: Int, $status: String, $created: String, $serialCode: String, $sort: String, $order: String) {
  devices(first: $first, skip: $skip, id: $id, hw: $hw, app: $app, status: $status, created: $created, serialCode: $serialCode, sort: $sort, order: $order) {
    totalCount
    pageInfo {
      ...pageInfoFields
    }
    edges {
      ...deviceEdgeFields
    }
  }
}
    ${exports.PageInfoFieldsFragmentDoc}
${exports.DeviceEdgeFieldsFragmentDoc}`;
exports.EventsDocument = graphql_tag_1.default `
    query events($first: first, $skip: skip) {
  events(first: $first, skip: $skip) {
    totalCount
    pageInfo {
      ...pageInfoFields
    }
    edges {
      ...eventEdgeFields
    }
  }
}
    ${exports.PageInfoFieldsFragmentDoc}
${exports.EventEdgeFieldsFragmentDoc}`;
exports.AppEventsDocument = graphql_tag_1.default `
    query appEvents($first: first, $skip: skip) {
  appEvents(first: $first, skip: $skip) {
    totalCount
    pageInfo {
      ...pageInfoFields
    }
    events {
      id
      createdAt
      type
      app {
        id
      }
      payload {
        user {
          id
          name
          email
          picture
          plan
          credit
          createdAt
        }
        device {
          id
          access_token
          description
          metadata
          devicekey
          hardware
          os
          osVersion
          region
          status
          createdAt
          user {
            id
            name
            email
            picture
            plan
            credit
            createdAt
          }
          configs
        }
      }
    }
  }
}
    ${exports.PageInfoFieldsFragmentDoc}`;
exports.RegistrateDeviceDocument = graphql_tag_1.default `
    mutation registrateDevice($device: deviceRegistrateInput!) {
  registrateDevice(device: $device) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    configs
  }
}
    `;
exports.InstallAppDocument = graphql_tag_1.default `
    mutation installApp($install: appInstallInput!) {
  installApp(install: $install) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    configs
  }
}
    `;
exports.UpdateDeviceSettingsForInstalledAppDocument = graphql_tag_1.default `
    mutation updateDeviceSettingsForInstalledApp($updateDeviceSettingsForInstalledApp: deviceInstalledAppSettingsInput!) {
  updateDeviceSettingsForInstalledApp(edit: $updateDeviceSettingsForInstalledApp) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    user {
      id
      name
      email
      picture
      plan
      credit
      createdAt
    }
    configs
  }
}
    `;
exports.UninstallAppDocument = graphql_tag_1.default `
    mutation uninstallApp($uninstallApp: appUninstallInput!) {
  uninstallApp(uninstall: $uninstallApp) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    configs
  }
}
    `;
exports.GenerateDeviceAccessTokenDocument = graphql_tag_1.default `
    mutation generateDeviceAccessToken($generateDeviceAccessToken: DeviceGenerateAccessTokenInput!) {
  generateDeviceAccessToken(device: $generateDeviceAccessToken) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    configs
  }
}
    `;
exports.DeleteDeviceAccessTokenDocument = graphql_tag_1.default `
    mutation deleteDeviceAccessToken($deleteDeviceAccessToken: DeviceDeleteAccessTokenInput!) {
  deleteDeviceAccessToken(device: $deleteDeviceAccessToken) {
    id
    access_token
    description
    metadata
    devicekey
    hardware
    os
    osVersion
    region
    status
    createdAt
    configs
  }
}
    `;
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        webapp(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.WebappDocument), variables));
        },
        app(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.AppDocument), variables));
        },
        user(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UserDocument), variables));
        },
        devices(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.DevicesDocument), variables));
        },
        events(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.EventsDocument), variables));
        },
        appEvents(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.AppEventsDocument), variables));
        },
        registrateDevice(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.RegistrateDeviceDocument), variables));
        },
        installApp(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.InstallAppDocument), variables));
        },
        updateDeviceSettingsForInstalledApp(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UpdateDeviceSettingsForInstalledAppDocument), variables));
        },
        uninstallApp(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UninstallAppDocument), variables));
        },
        generateDeviceAccessToken(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.GenerateDeviceAccessTokenDocument), variables));
        },
        deleteDeviceAccessToken(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.DeleteDeviceAccessTokenDocument), variables));
        }
    };
}
exports.getSdk = getSdk;
