"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.RemoveOperationResultDocument = exports.CreateOperationResultDocument = exports.UpdateStatusOperationSettingDocument = exports.DeleteDeviceAccessTokenDocument = exports.GenerateDeviceAccessTokenDocument = exports.UninstallAppDocument = exports.UpdateDeviceSettingsForInstalledAppDocument = exports.InstallAppDocument = exports.UpdateDeviceDocument = exports.RegistrateDeviceDocument = exports.CreateDeviceDocument = exports.DeleteEventDocument = exports.UpdateEventDocument = exports.CreateEventDocument = exports.TokenDocument = exports.OperationResultsDocument = exports.OperationSettingsDocument = exports.OperationsDocument = exports.AppEventsDocument = exports.OsDocument = exports.HardwaresDocument = exports.EventsDocument = exports.DevicesDocument = exports.UserDocument = exports.AppDocument = exports.WebappDocument = exports.EventEdgeFieldsFragmentDoc = exports.DeviceEdgeFieldsFragmentDoc = exports.AppInstallEdgeFieldsFragmentDoc = exports.InstallEdgeFieldsFragmentDoc = exports.PageInfoFieldsFragmentDoc = void 0;
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
  }
}
    `;
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
exports.HardwaresDocument = graphql_tag_1.default `
    query hardwares {
  hardwares {
    hardware
    os
  }
}
    `;
exports.OsDocument = graphql_tag_1.default `
    query os($hardware: String!) {
  os(hardware: $hardware) {
    version
    app_url
    bootloader_url
    partition_url
  }
}
    `;
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
exports.OperationsDocument = graphql_tag_1.default `
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
exports.OperationSettingsDocument = graphql_tag_1.default `
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
exports.OperationResultsDocument = graphql_tag_1.default `
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
exports.TokenDocument = graphql_tag_1.default `
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
exports.CreateEventDocument = graphql_tag_1.default `
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
exports.UpdateEventDocument = graphql_tag_1.default `
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
exports.DeleteEventDocument = graphql_tag_1.default `
    mutation deleteEvent($id: ID!) {
  deleteEvent(id: $id)
}
    `;
exports.CreateDeviceDocument = graphql_tag_1.default `
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
exports.UpdateDeviceDocument = graphql_tag_1.default `
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
exports.UpdateStatusOperationSettingDocument = graphql_tag_1.default `
    mutation updateStatusOperationSetting($operationSettingId: ID!) {
  updateStatusOperationSetting(operationSettingId: $operationSettingId) {
    updated
  }
}
    `;
exports.CreateOperationResultDocument = graphql_tag_1.default `
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
exports.RemoveOperationResultDocument = graphql_tag_1.default `
    mutation removeOperationResult($operationSettingId: ID!) {
  removeOperationResult(operationSettingId: $operationSettingId) {
    removed
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
        hardwares(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.HardwaresDocument), variables));
        },
        os(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.OsDocument), variables));
        },
        appEvents(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.AppEventsDocument), variables));
        },
        operations(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.OperationsDocument), variables));
        },
        operationSettings(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.OperationSettingsDocument), variables));
        },
        operationResults(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.OperationResultsDocument), variables));
        },
        token(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.TokenDocument), variables));
        },
        createEvent(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.CreateEventDocument), variables));
        },
        updateEvent(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UpdateEventDocument), variables));
        },
        deleteEvent(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.DeleteEventDocument), variables));
        },
        createDevice(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.CreateDeviceDocument), variables));
        },
        registrateDevice(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.RegistrateDeviceDocument), variables));
        },
        updateDevice(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UpdateDeviceDocument), variables));
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
        },
        updateStatusOperationSetting(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.UpdateStatusOperationSettingDocument), variables));
        },
        createOperationResult(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.CreateOperationResultDocument), variables));
        },
        removeOperationResult(variables) {
            return withWrapper(() => client.request(graphql_1.print(exports.RemoveOperationResultDocument), variables));
        }
    };
}
exports.getSdk = getSdk;
