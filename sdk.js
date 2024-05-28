"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.RemoveOperationResultDocument = exports.CreateOperationResultDocument = exports.UpdateStatusOperationSettingDocument = exports.DeleteDeviceAccessTokenDocument = exports.GenerateDeviceAccessTokenDocument = exports.UninstallAppDocument = exports.UpdateDeviceSettingsForInstalledAppDocument = exports.InstallAppDocument = exports.UpdateDeviceDocument = exports.RegistrateDeviceDocument = exports.CreateDeviceDocument = exports.DeleteEventDocument = exports.UpdateEventDocument = exports.CreateEventDocument = exports.TokenDocument = exports.OperationResultsDocument = exports.OperationSettingsDocument = exports.OperationsDocument = exports.AppEventsDocument = exports.OsDocument = exports.HardwaresDocument = exports.EventsDocument = exports.DeviceDocument = exports.DevicesDocument = exports.UserDocument = exports.AppDocument = exports.WebappDocument = exports.EventEdgeFieldsFragmentDoc = exports.DeviceEdgeFieldsFragmentDoc = exports.DeviceLiveInfoFieldsFragmentDoc = exports.ConnectedNetworkFieldsFragmentDoc = exports.CellularFieldsFragmentDoc = exports.WifimeshFieldsFragmentDoc = exports.WifiFieldsFragmentDoc = exports.AppInstallEdgeFieldsFragmentDoc = exports.InstallEdgeFieldsFragmentDoc = exports.PageInfoFieldsFragmentDoc = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.PageInfoFieldsFragmentDoc = (0, graphql_tag_1.default) `
    fragment pageInfoFields on pageInfo {
  hasPreviousPage
  hasNextPage
}
    `;
exports.InstallEdgeFieldsFragmentDoc = (0, graphql_tag_1.default) `
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
exports.AppInstallEdgeFieldsFragmentDoc = (0, graphql_tag_1.default) `
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
exports.WifiFieldsFragmentDoc = (0, graphql_tag_1.default) `
    fragment wifiFields on wifi {
  ssid
  macAddress
  rssi
}
    `;
exports.WifimeshFieldsFragmentDoc = (0, graphql_tag_1.default) `
    fragment wifimeshFields on wifimesh {
  meshid
  parent_obniz_id
  root_obniz_id
  layer
  rssi
}
    `;
exports.CellularFieldsFragmentDoc = (0, graphql_tag_1.default) `
    fragment cellularFields on cellular {
  cnum
  iccid
  imei
  imsi
  rssi
}
    `;
exports.ConnectedNetworkFieldsFragmentDoc = (0, graphql_tag_1.default) `
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
  cellular {
    ...cellularFields
  }
}
    ${exports.WifiFieldsFragmentDoc}
${exports.WifimeshFieldsFragmentDoc}
${exports.CellularFieldsFragmentDoc}`;
exports.DeviceLiveInfoFieldsFragmentDoc = (0, graphql_tag_1.default) `
    fragment deviceLiveInfoFields on deviceLiveInfo {
  isOnline
  onlineAt
  offlineAt
  connectedNetwork {
    ...connectedNetworkFields
  }
}
    ${exports.ConnectedNetworkFieldsFragmentDoc}`;
exports.DeviceEdgeFieldsFragmentDoc = (0, graphql_tag_1.default) `
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
exports.EventEdgeFieldsFragmentDoc = (0, graphql_tag_1.default) `
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
exports.WebappDocument = (0, graphql_tag_1.default) `
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
exports.AppDocument = (0, graphql_tag_1.default) `
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
exports.UserDocument = (0, graphql_tag_1.default) `
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
exports.DevicesDocument = (0, graphql_tag_1.default) `
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
exports.DeviceDocument = (0, graphql_tag_1.default) `
    query device($serialUrl: String) {
  device(serialUrl: $serialUrl) {
    id
  }
}
    `;
exports.EventsDocument = (0, graphql_tag_1.default) `
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
exports.HardwaresDocument = (0, graphql_tag_1.default) `
    query hardwares {
  hardwares {
    hardware
    os
  }
}
    `;
exports.OsDocument = (0, graphql_tag_1.default) `
    query os($hardware: String!) {
  os(hardware: $hardware) {
    version
    app_url
    bootloader_url
    partition_url
  }
}
    `;
exports.AppEventsDocument = (0, graphql_tag_1.default) `
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
exports.OperationsDocument = (0, graphql_tag_1.default) `
    query operations($id: Int, $facilityName: String) {
  operations(id: $id, facilityName: $facilityName) {
    edges {
      node {
        id
        name
        facilityId
        completionLevel
        needPicEvidence
        needLocationNote
        dueDate
        operationKey
        createdAt
      }
      facilityName
      amountExpectedDevices
      amountOperatedDevices
      amountReport
      errorLevelReport
    }
  }
}
    `;
exports.OperationSettingsDocument = (0, graphql_tag_1.default) `
    query operationSettings($first: first, $operationId: ID, $status: Int) {
  operationSettings(first: $first, operationId: $operationId, status: $status) {
    totalCount
    edges {
      node {
        id
        operationId
        indicationId
        networkConfigs
        appId
        appConfigs
        description
        status
      }
      operationResult {
        obnizId
        successfullyWrittenAt
        becomeOnlineAt
        picUrl
        locationNote
        typeError
      }
    }
  }
}
    `;
exports.OperationResultsDocument = (0, graphql_tag_1.default) `
    query operationResults($first: first, $operationId: ID, $operationSettingId: ID) {
  operationResults(first: $first, operationId: $operationId, operationSettingId: $operationSettingId) {
    totalCount
    edges {
      node {
        id
        operationSettingId
        indicationId
        obnizId
        successfullyWrittenAt
        becomeOnlineAt
        picUrl
        locationNote
        typeError
      }
    }
  }
}
    `;
exports.TokenDocument = (0, graphql_tag_1.default) `
    query token {
  token {
    type
    user
    device
    event
    facility
    device_control
  }
}
    `;
exports.CreateEventDocument = (0, graphql_tag_1.default) `
    mutation createEvent($event: eventCreateInput!) {
  createEvent(event: $event) {
    id
    name
    trigger
    action
    webhookUri
    createdAt
  }
}
    `;
exports.UpdateEventDocument = (0, graphql_tag_1.default) `
    mutation updateEvent($event: eventUpdateInput!) {
  updateEvent(event: $event) {
    id
    name
    trigger
    action
    webhookUri
    createdAt
  }
}
    `;
exports.DeleteEventDocument = (0, graphql_tag_1.default) `
    mutation deleteEvent($id: ID!) {
  deleteEvent(id: $id)
}
    `;
exports.CreateDeviceDocument = (0, graphql_tag_1.default) `
    mutation createDevice($device: deviceCreateInput!) {
  createDevice(device: $device) {
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
exports.RegistrateDeviceDocument = (0, graphql_tag_1.default) `
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
exports.UpdateDeviceDocument = (0, graphql_tag_1.default) `
    mutation updateDevice($device: deviceUpdateInput!) {
  updateDevice(device: $device) {
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
exports.InstallAppDocument = (0, graphql_tag_1.default) `
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
exports.UpdateDeviceSettingsForInstalledAppDocument = (0, graphql_tag_1.default) `
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
exports.UninstallAppDocument = (0, graphql_tag_1.default) `
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
exports.GenerateDeviceAccessTokenDocument = (0, graphql_tag_1.default) `
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
exports.DeleteDeviceAccessTokenDocument = (0, graphql_tag_1.default) `
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
exports.UpdateStatusOperationSettingDocument = (0, graphql_tag_1.default) `
    mutation updateStatusOperationSetting($operationSettingId: ID!) {
  updateStatusOperationSetting(operationSettingId: $operationSettingId) {
    updated
  }
}
    `;
exports.CreateOperationResultDocument = (0, graphql_tag_1.default) `
    mutation createOperationResult($operationResult: createOperationResultInput!) {
  createOperationResult(operationResult: $operationResult) {
    id
    operationSettingId
    indicationId
    obnizId
    successfullyWrittenAt
    becomeOnlineAt
    picUrl
    locationNote
    typeError
  }
}
    `;
exports.RemoveOperationResultDocument = (0, graphql_tag_1.default) `
    mutation removeOperationResult($operationSettingId: ID!) {
  removeOperationResult(operationSettingId: $operationSettingId) {
    removed
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        webapp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.WebappDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'webapp', 'query');
        },
        app(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'app', 'query');
        },
        user(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UserDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'user', 'query');
        },
        devices(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DevicesDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'devices', 'query');
        },
        device(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeviceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'device', 'query');
        },
        events(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.EventsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'events', 'query');
        },
        hardwares(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.HardwaresDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'hardwares', 'query');
        },
        os(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'os', 'query');
        },
        appEvents(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AppEventsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'appEvents', 'query');
        },
        operations(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OperationsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'operations', 'query');
        },
        operationSettings(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OperationSettingsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'operationSettings', 'query');
        },
        operationResults(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.OperationResultsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'operationResults', 'query');
        },
        token(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'token', 'query');
        },
        createEvent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateEventDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'createEvent', 'mutation');
        },
        updateEvent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateEventDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updateEvent', 'mutation');
        },
        deleteEvent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteEventDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'deleteEvent', 'mutation');
        },
        createDevice(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateDeviceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'createDevice', 'mutation');
        },
        registrateDevice(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RegistrateDeviceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'registrateDevice', 'mutation');
        },
        updateDevice(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateDeviceDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updateDevice', 'mutation');
        },
        installApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.InstallAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'installApp', 'mutation');
        },
        updateDeviceSettingsForInstalledApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateDeviceSettingsForInstalledAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updateDeviceSettingsForInstalledApp', 'mutation');
        },
        uninstallApp(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UninstallAppDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'uninstallApp', 'mutation');
        },
        generateDeviceAccessToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GenerateDeviceAccessTokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'generateDeviceAccessToken', 'mutation');
        },
        deleteDeviceAccessToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteDeviceAccessTokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'deleteDeviceAccessToken', 'mutation');
        },
        updateStatusOperationSetting(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateStatusOperationSettingDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'updateStatusOperationSetting', 'mutation');
        },
        createOperationResult(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateOperationResultDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'createOperationResult', 'mutation');
        },
        removeOperationResult(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveOperationResultDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'removeOperationResult', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
