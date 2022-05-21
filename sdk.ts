import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO-8601 Format DateTime */
  Date: any;
  /** [Int] Limitation of query results. range is 1..50 */
  first: any;
  /** [Int] offset of query results. range is 0<= */
  skip: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** App object. This contains app information which created on obniz.com as App */
export type App = {
  __typename?: 'app';
  /** Unique Identifier of app */
  id: Scalars['ID'];
  /** Query Installs for an App. */
  installs?: Maybe<AppInstallConnection>;
  /** English Description */
  short_body: Scalars['String'];
  /** Current Status on obniz.com app on explore */
  store_status: Scalars['String'];
  /** English Title of app */
  title: Scalars['String'];
  /** Type of app. */
  type: Scalars['String'];
};


/** App object. This contains app information which created on obniz.com as App */
export type AppInstallsArgs = {
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
};

export type AppConfigInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** This contains information that was sent by the webhook in the past. */
export type AppEvent = {
  __typename?: 'appEvent';
  app: AppEventApp;
  /** The date and time the webhook was sent. */
  createdAt: Scalars['String'];
  /** Unique Identifier of webhook for webapp */
  id: Scalars['Int'];
  payload: AppEventPayload;
  /** Type of event, */
  type: Scalars['String'];
};

export type AppEventApp = {
  __typename?: 'appEventApp';
  /** Unique Identifier of webapp */
  id: Scalars['ID'];
};

/** Contains any of the following objects. */
export type AppEventPayload = {
  __typename?: 'appEventPayload';
  device?: Maybe<Device>;
  user?: Maybe<User>;
};

/** Connection of Device */
export type AppEvents = {
  __typename?: 'appEvents';
  /** Events */
  events: Array<Maybe<AppEvent>>;
  /** Page Information */
  pageInfo: PageInfo;
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
};

/** Connection of Install */
export type AppInstallConnection = {
  __typename?: 'appInstallConnection';
  /** Edges */
  edges: Array<Maybe<AppInstallEdge>>;
  /** Page Information */
  pageInfo: PageInfo;
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
};

/** Install Edge */
export type AppInstallEdge = {
  __typename?: 'appInstallEdge';
  /** Cursor */
  node?: Maybe<Installed_Device>;
};

export type AppInstallInput = {
  app: AppInstallInputApp;
  obniz: AppInstallInputDevice;
};

export type AppInstallInputApp = {
  config: Array<AppConfigInput>;
  /** appID */
  id: Scalars['ID'];
};

export type AppInstallInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

/** App log */
export type AppLog = {
  __typename?: 'appLog';
  /** The app log is targetted at an app having this ID */
  appId: Scalars['ID'];
  /** Created at */
  createdAt: Scalars['Date'];
  /** Unique ID */
  id: Scalars['ID'];
  /** Log level of the app log. Possibilitties are either 'info' or 'error' */
  level: Scalars['String'];
  /** String representation of json including log information. */
  logJson: Scalars['String'];
  /** obniz ID */
  obnizId: Scalars['ID'];
};

/** App status */
export type AppStatus = {
  __typename?: 'appStatus';
  /** created at */
  createdAt?: Maybe<Scalars['Date']>;
  /** Unique ID */
  id: Scalars['ID'];
  /** obniz ID */
  obnizId: Scalars['ID'];
  result?: Maybe<AppStatusResult>;
};

export type AppStatusResult = {
  __typename?: 'appStatusResult';
  /** app status */
  status: Scalars['String'];
  /** text detailing the app status */
  text: Scalars['String'];
};

export type AppUninstallInput = {
  obniz?: InputMaybe<AppUninstallInputDevice>;
};

export type AppUninstallInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

/** Information of currently connected network  */
export type ConnectedNetwork = {
  __typename?: 'connectedNetwork';
  /** Global IP if exist. ex) 201.200.199.198 */
  global_ip?: Maybe<Scalars['String']>;
  /** Local IP If exist. ex) 192.168.0.100 */
  local_ip?: Maybe<Scalars['String']>;
  /** Current connected network type. Defined in setting json. ex) wirelesslan */
  net: Scalars['String'];
  /** The time device become online on the cloud */
  online_at: Scalars['Date'];
  /** Wi-Fi information if network type is wifi */
  wifi?: Maybe<Wifi>;
  /** Wi-Fi Mesh information if network type is wifimesh */
  wifimesh?: Maybe<Wifimesh>;
};

export type CreateAppLogInput = {
  app: CreateAppLogInputApp;
  obniz: CreateAppLogInputDevice;
};

export type CreateAppLogInputApp = {
  /** log level: info or error */
  level: Scalars['String'];
  /** The string must be json format and include a key 'message'. e.g. '{ 'message': 'log message' }' */
  logJson: Scalars['String'];
};

export type CreateAppLogInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

export type CreateAppStatusInput = {
  obniz: CreateAppStatusInputDevice;
  result: CreateAppStatusInputApp;
};

export type CreateAppStatusInputApp = {
  /** status */
  status: Scalars['String'];
  /** text */
  text: Scalars['String'];
};

export type CreateAppStatusInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

export type CreateOperationResultInput = {
  /** Time when an obniz became online. */
  becomeOnlineAt?: InputMaybe<Scalars['Date']>;
  /** Location note. */
  locationNote?: InputMaybe<Scalars['String']>;
  /** Obniz ID. Format can be both xxxx-xxxx and xxxxxxxx. */
  obnizId?: InputMaybe<Scalars['String']>;
  /** Operation setting ID. */
  operationSettingId: Scalars['ID'];
  /** Binary data of operation picture. */
  picBinary?: InputMaybe<Scalars['Upload']>;
  /** Time when a device setting is written onto an obniz. */
  successfullyWrittenAt?: InputMaybe<Scalars['Date']>;
  /**
   * Type of operation error. Possibities:
   *
   *             - No error -> 0
   *             - Gateway not found -> 1
   *             - Found multi gateway -> 2
   *             - Cannot connect to gateway -> 3
   *             - Gateway cannot connect the wifi -> 4
   *
   *             - Invalid ssid or password -> 5
   *             - Cannot resolve dns -> 6
   *             - Cannot go out to the internet -> 7
   *             - Cannot communicate with gateway -> 8
   *
   */
  typeError: Scalars['Int'];
};

/** Device information */
export type Device = {
  __typename?: 'device';
  /** Access Token */
  access_token?: Maybe<Scalars['String']>;
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
  /**
   * Description
   *
   *       Same value are exist on metadata.description
   *
   */
  description: Scalars['String'];
  /**
   * DeviceKey
   *
   *       String representation of DeviceKey which installed or to be installed on the device.
   *
   */
  devicekey?: Maybe<Scalars['String']>;
  /** Device Live Information. */
  deviceLiveInfo?: Maybe<DeviceLiveInfo>;
  /**
   * Hardware Identifier
   *
   *       'obnizb1': obniz Board
   *
   *       'obnizb2': obniz Board 1Y
   *
   *       'm5stickc': M5StickC
   *
   *       'esp32w': obnizOS for ESP32
   *
   *       'esp32p': obnizOS for ESP32 on ESP32-PICO
   *
   *       'encored': obniz BLE/Wi-Fi Gateway
   *
   */
  hardware: Scalars['String'];
  /** Unique Identifier like "0000-0000" */
  id: Scalars['ID'];
  /**
   * User Defined Metadata JSON string
   *
   *       Useful for labeling device location or attached machine.
   */
  metadata: Scalars['String'];
  /**
   * OS Identifier
   *
   *       'obnizb1': obniz Board
   *
   *       'obnizb2': obniz Board 1Y
   *
   *       'm5stickc': M5StickC
   *
   *       'esp32w': obnizOS for ESP32
   *
   *       'encored': obniz BLE/Wi-Fi Gateway
   *
   */
  os: Scalars['String'];
  /** Last time recognized os version like '1.0.0' */
  osVersion: Scalars['String'];
  /** Online Check Interval in minutes. By default it is null and automatic interval under 1 minutes. */
  pingInterval?: Maybe<Scalars['Int']>;
  /**
   * Server Region
   *
   *       'jp': Japan(East Asia)
   *
   *       'us': United States of America(West-America)
   *
   *
   */
  region: Scalars['String'];
  /**
   * Status
   *
   *       'active': activated
   *
   *       'inactive': inactivated
   *
   *
   */
  status: Scalars['String'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
};

/** Connection of Device */
export type DeviceConnection = {
  __typename?: 'deviceConnection';
  /** Edges */
  edges: Array<Maybe<DeviceEdge>>;
  /** Page Information */
  pageInfo: PageInfo;
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
};

export type DeviceCreateInput = {
  /**
   * Description
   *
   *       User Defined Metadata. Useful for labeling device location or attached machine.
   *
   */
  description?: InputMaybe<Scalars['String']>;
  /**
   * Hardware Identifier
   *
   *       'esp32w': obnizOS for ESP32
   *
   *       'esp32p': obnizOS for ESP32 on ESP32-PICO
   */
  hardware: Scalars['String'];
  /**
   * Server Region
   *
   *       'jp': Japan(East Asia)
   *
   *       'us': United States of America(West-America)
   *
   *
   */
  region?: InputMaybe<Scalars['String']>;
  /**
   * Description
   *
   *       Option for manufacturer
   *
   */
  serialdata?: InputMaybe<Scalars['String']>;
};

export type DeviceDeleteAccessTokenInput = {
  obniz?: InputMaybe<DeviceDeleteAccessTokenInputDevice>;
};

export type DeviceDeleteAccessTokenInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

/** Device Edge */
export type DeviceEdge = {
  __typename?: 'deviceEdge';
  /** Cursor */
  node?: Maybe<Device>;
};

export type DeviceGenerateAccessTokenInput = {
  obniz?: InputMaybe<DeviceGenerateAccessTokenInputDevice>;
};

export type DeviceGenerateAccessTokenInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

export type DeviceInstalledAppSettingsInput = {
  app?: InputMaybe<DeviceInstalledAppSettingsInputApp>;
  obniz?: InputMaybe<DeviceInstalledAppSettingsInputDevice>;
};

export type DeviceInstalledAppSettingsInputApp = {
  config: Array<AppConfigInput>;
};

export type DeviceInstalledAppSettingsInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

/** Device Live Information. */
export type DeviceLiveInfo = {
  __typename?: 'deviceLiveInfo';
  /** Live Information. Connected Wi-Fi and RSSI and other related. */
  connectedNetwork?: Maybe<ConnectedNetwork>;
  /** Live Information. Device is Online or Offline */
  isOnline: Scalars['Boolean'];
  /** The time device become offline on the cloud */
  offlineAt?: Maybe<Scalars['Date']>;
  /** The time device become online on the cloud */
  onlineAt?: Maybe<Scalars['Date']>;
};

export type DeviceNoAuthRequired = {
  __typename?: 'deviceNoAuthRequired';
  /** Format is like XXXX-XXXX */
  id: Scalars['String'];
};

export type DeviceRegistrateInput = {
  /** It can be obtained from the QR Code on the device. */
  registrateUrl: Scalars['String'];
};

export type DeviceUpdateInput = {
  /**
   * Use Defined Description
   *
   *       Same value are exist on metadata.description
   *
   */
  description?: InputMaybe<Scalars['String']>;
  /** obnizID */
  id: Scalars['ID'];
  /**
   * User Defined Metadata key-value JSON string
   *
   *       Only key:string and value:string is accepted
   *       Useful for labeling device location or attached machine.
   */
  metadata?: InputMaybe<Scalars['String']>;
  /** Online Check Interval in milli seconds. By default it is null and automatic interval under 1 minutes. */
  pingInterval?: InputMaybe<Scalars['Int']>;
  /**
   * Server Region
   *
   *       'jp': Japan(East Asia)
   *
   *       'us': United States of America(West-America)
   *
   *
   */
  region?: InputMaybe<Scalars['String']>;
  /**
   * Status
   *
   *       'active': activated
   *
   *       'inactive': inactivated
   *
   *
   */
  status?: InputMaybe<Scalars['String']>;
};

/** ServerlessEvent */
export type Event = {
  __typename?: 'event';
  /**
   * Action uri
   *
   *       '{filename_in_repo}':
   *
   *       'webapp://{install_id}/run': installed webapp
   *
   *
   */
  action: Scalars['String'];
  /** Created time */
  createdAt: Scalars['Date'];
  /** Unique Identifier */
  id: Scalars['ID'];
  /** User named */
  name: Scalars['String'];
  /**
   * Event trigger as string.
   *
   *       'webhook': webhook
   *
   *       'everyday/{hour}:{time}': timing on a day
   *
   *       'every/{time}{minutes or hours}': interval
   *
   *       'device/{obniz_id}/switch_state_push': device event switch pressed.
   *
   *       'device/{obniz_id}/online': device event online.
   *
   */
  trigger: Scalars['String'];
  /** webhook Endpoint if trigger is webhook. */
  webhookUri?: Maybe<Scalars['String']>;
};

/** Connection of Event */
export type EventConnection = {
  __typename?: 'eventConnection';
  /** Edges */
  edges: Array<Maybe<EventEdge>>;
  /** Page Information */
  pageInfo: PageInfo;
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
};

export type EventCreateInput = {
  /**
   * Action uri
   *
   *       '{filename_in_repo}':
   *
   *       'webapp://{install_id}/run': installed webapp
   *
   */
  action: Scalars['String'];
  /** The Event name */
  name: Scalars['String'];
  /**
   * Event trigger as string.
   *
   *       'webhook': webhook
   *
   *       'everyday/{hour}:{time}': timing on a day
   *
   *       'every/{time}{minutes or hours}': interval
   *
   *       'device/{obniz_id}/switch_state_push': device event switch pressed.
   *
   *       'device/{obniz_id}/online': device event online.
   *
   */
  trigger: Scalars['String'];
};

/** Event Edge */
export type EventEdge = {
  __typename?: 'eventEdge';
  /** Cursor */
  node?: Maybe<Event>;
};

export type EventUpdateInput = {
  /**
   * Action uri
   *       '{filename_in_repo}':
   *       'webapp://{install_id}/run': installed webapp
   *
   */
  action: Scalars['String'];
  /** Unique Identifier */
  id: Scalars['ID'];
  /** The Event name */
  name: Scalars['String'];
  /**
   * Event trigger as string.
   *
   *       'webhook': webhook
   *
   *       'everyday/{hour}:{time}': timing on a day
   *
   *       'every/{time}{minutes or hours}': interval
   *
   *       'device/{obniz_id}/switch_state_push': device event switch pressed.
   *
   *       'device/{obniz_id}/online': device event online.
   *
   */
  trigger: Scalars['String'];
};

/** Hardware Information. This indicate related os information for each hardware */
export type Hardware = {
  __typename?: 'hardware';
  /** Hardware Identifier  */
  hardware: Scalars['String'];
  /** OS identifier for hardware. */
  os: Scalars['String'];
};

/** Installed WebApp object. This contains user installed webapp configration */
export type Install = {
  __typename?: 'install';
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
  /** Unique Identifier of install */
  id: Scalars['ID'];
  /** Updated time */
  updatedAt: Scalars['Date'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
};

/** Connection of Install */
export type InstallConnection = {
  __typename?: 'installConnection';
  /** Edges */
  edges: Array<Maybe<InstallEdge>>;
  /** Page Information */
  pageInfo: PageInfo;
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
};

/** Device information */
export type Installed_Device = {
  __typename?: 'installed_device';
  /** Access Token */
  access_token?: Maybe<Scalars['String']>;
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
  /**
   * Description
   *
   *       Same value are exist on metadata.description
   *
   */
  description: Scalars['String'];
  /**
   * DeviceKey
   *
   *       String representation of DeviceKey which installed or to be installed on the device.
   *
   */
  devicekey?: Maybe<Scalars['String']>;
  /** Device Live Information. */
  deviceLiveInfo?: Maybe<DeviceLiveInfo>;
  /**
   * Hardware Identifier
   *
   *       'obnizb1': obniz Board
   *
   *       'obnizb2': obniz Board 1Y
   *
   *       'm5stickc': M5StickC
   *
   *       'esp32w': obnizOS for ESP32
   *
   *       'esp32p': obnizOS for ESP32 on ESP32-PICO
   *
   *       'encored': obniz BLE/Wi-Fi Gateway
   *
   */
  hardware: Scalars['String'];
  /** Unique Identifier like "0000-0000" */
  id: Scalars['ID'];
  /**
   * User Defined Metadata JSON string
   *
   *       Useful for labeling device location or attached machine.
   */
  metadata: Scalars['String'];
  /**
   * OS Identifier
   *
   *       'obnizb1': obniz Board
   *
   *       'obnizb2': obniz Board 1Y
   *
   *       'm5stickc': M5StickC
   *
   *       'esp32w': obnizOS for ESP32
   *
   *       'encored': obniz BLE/Wi-Fi Gateway
   *
   */
  os: Scalars['String'];
  /** Last time recognized os version like '1.0.0' */
  osVersion: Scalars['String'];
  /** Online Check Interval in minutes. By default it is null and automatic interval under 1 minutes. */
  pingInterval?: Maybe<Scalars['Int']>;
  /**
   * Server Region
   *
   *       'jp': Japan(East Asia)
   *
   *       'us': United States of America(West-America)
   *
   *
   */
  region: Scalars['String'];
  /**
   * Status
   *
   *       'active': activated
   *
   *       'inactive': inactivated
   *
   *
   */
  status: Scalars['String'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
};

/** Install Edge */
export type InstallEdge = {
  __typename?: 'installEdge';
  /** Cursor */
  node?: Maybe<Install>;
};

/** Root of api.obniz.com graphql api endpoint mutations */
export type Mutation = {
  __typename?: 'Mutation';
  /** Create app log */
  createAppLog?: Maybe<AppLog>;
  /** Create app status */
  createAppStatus?: Maybe<AppStatus>;
  /** Create New Device */
  createDevice?: Maybe<Device>;
  /** Create New Event */
  createEvent?: Maybe<Event>;
  createOperationResult?: Maybe<OperationResult>;
  /** Delete Device Access Token */
  deleteDeviceAccessToken?: Maybe<Device>;
  /** Delete Exist Event */
  deleteEvent: Scalars['ID'];
  /** Generate Device Access Token */
  generateDeviceAccessToken?: Maybe<Device>;
  /** Install App To Device */
  installApp?: Maybe<Device>;
  /** Registration New Device */
  registrateDevice?: Maybe<Device>;
  removeOperationResult?: Maybe<RemoveOperationResultResponse>;
  /** Install App To Device */
  uninstallApp?: Maybe<Device>;
  /** Update Device */
  updateDevice?: Maybe<Device>;
  /** Edit Settings For Installed App */
  updateDeviceSettingsForInstalledApp?: Maybe<Device>;
  /** Update Exist Event */
  updateEvent?: Maybe<Event>;
  updateStatusOperationSetting?: Maybe<UpdateStatusOperationSettingResult>;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateAppLogArgs = {
  input: CreateAppLogInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateAppStatusArgs = {
  input: CreateAppStatusInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateDeviceArgs = {
  device: DeviceCreateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateEventArgs = {
  event: EventCreateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateOperationResultArgs = {
  operationResult: CreateOperationResultInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationDeleteDeviceAccessTokenArgs = {
  device: DeviceDeleteAccessTokenInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationGenerateDeviceAccessTokenArgs = {
  device: DeviceGenerateAccessTokenInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationInstallAppArgs = {
  install: AppInstallInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationRegistrateDeviceArgs = {
  device: DeviceRegistrateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationRemoveOperationResultArgs = {
  operationSettingId: Scalars['ID'];
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUninstallAppArgs = {
  uninstall: AppUninstallInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateDeviceArgs = {
  device: DeviceUpdateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateDeviceSettingsForInstalledAppArgs = {
  edit: DeviceInstalledAppSettingsInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateEventArgs = {
  event: EventUpdateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateStatusOperationSettingArgs = {
  operationSettingId: Scalars['ID'];
};

/** operation. */
export type Operation = {
  __typename?: 'operation';
  /** Criteria of completion. 0: written, 1: online. */
  completionLevel: Scalars['Int'];
  /** Time when the facility created at */
  createdAt: Scalars['Date'];
  /** Time when the operation will be carried out. */
  dueDate?: Maybe<Scalars['Date']>;
  /** Facility ID which the operation targets at. */
  facilityId: Scalars['Int'];
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Name of operation. */
  name: Scalars['String'];
  /** Need to specify the exact device location if this param is true. */
  needLocationNote: Scalars['Boolean'];
  /** Evidence picture of completion is required if this param is true. */
  needPicEvidence: Scalars['Boolean'];
  /** Token that is going to be inclued in the operation URL on Android APP. */
  operationKey: Scalars['String'];
};

/** operation edge */
export type OperationEdge = {
  __typename?: 'operationEdge';
  /** The amount of devices that are going to be set. */
  amountExpectedDevices?: Maybe<Scalars['Int']>;
  /** The amount of devices that have already been set. */
  amountOperatedDevices?: Maybe<Scalars['Int']>;
  /** The amount of reports including both error and information. */
  amountReport?: Maybe<Scalars['Int']>;
  /** Indicates whether or not error occurred and its error level if any. NoPrombelm Error. */
  errorLevelReport?: Maybe<Scalars['String']>;
  /** Facility name. */
  facilityName?: Maybe<Scalars['String']>;
  /** Cursor. */
  node?: Maybe<Operation>;
};

/** Operation result. */
export type OperationResult = {
  __typename?: 'operationResult';
  /** Time when a device became online. */
  becomeOnlineAt?: Maybe<Scalars['Date']>;
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Indication Id. */
  indicationId: Scalars['String'];
  /** Note about where a device has been set. */
  locationNote?: Maybe<Scalars['String']>;
  /** Obniz Id. */
  obnizId?: Maybe<Scalars['Int']>;
  /** Operation Setting Id. */
  operationSettingId: Scalars['ID'];
  /** Url of evidence picture. */
  picUrl?: Maybe<Scalars['String']>;
  /** Time when operation setting has been written. */
  successfullyWrittenAt?: Maybe<Scalars['Date']>;
  /** Error code of operation failure. */
  typeError?: Maybe<Scalars['Int']>;
};

/** Operation result edge. */
export type OperationResultEdge = {
  __typename?: 'operationResultEdge';
  /** Cursor */
  node?: Maybe<OperationResult>;
};

/** Operation result. */
export type OperationResultForOperationSetting = {
  __typename?: 'operationResultForOperationSetting';
  /** Time when a device became online. */
  becomeOnlineAt?: Maybe<Scalars['Date']>;
  /** Note about where a device has been set. */
  locationNote?: Maybe<Scalars['String']>;
  /** Obniz Id. */
  obnizId?: Maybe<Scalars['Int']>;
  /** Url of evidence picture. */
  picUrl?: Maybe<Scalars['String']>;
  /** Time when operation setting has been written. */
  successfullyWrittenAt?: Maybe<Scalars['Date']>;
  /** Error code of operation failure. */
  typeError?: Maybe<Scalars['Int']>;
};

/** Connection of operation results. */
export type OperationResultsConnection = {
  __typename?: 'operationResultsConnection';
  /** Edges. */
  edges: Array<Maybe<OperationResultEdge>>;
  /** Total count of operation results edges */
  totalCount: Scalars['Int'];
};

/** Connection of operations. */
export type OperationsConnection = {
  __typename?: 'operationsConnection';
  /** Edges. */
  edges: Array<Maybe<OperationEdge>>;
};

/** Operation setting */
export type OperationSetting = {
  __typename?: 'operationSetting';
  /** String representation of app config object. Will be empty object when no app is selected. */
  appConfigs: Scalars['String'];
  /** App ID. This field will be null when app is not selected. */
  appId?: Maybe<Scalars['Int']>;
  /** When no description is set, this field will be an empty string. */
  description: Scalars['String'];
  /** Unique identifier. */
  id: Scalars['ID'];
  /** Indication ID. */
  indicationId: Scalars['String'];
  /** String representation of network config. Please see https://obniz.com/ja/doc/reference/obnizos-for-esp32/settings/setting-json */
  networkConfigs: Scalars['String'];
  /** Operation ID */
  operationId: Scalars['ID'];
  /** 0: not operated yet, 1: in progress, 2: finished */
  status: Scalars['Int'];
};

/** Operation setting edge. */
export type OperationSettingEdge = {
  __typename?: 'operationSettingEdge';
  /** Cursor. */
  node?: Maybe<OperationSetting>;
  /** Operation result of the specific setting ID if any. */
  operationResult?: Maybe<OperationResultForOperationSetting>;
};

/** Connection of operation settings */
export type OperationSettingsConnection = {
  __typename?: 'operationSettingsConnection';
  /** Edges. */
  edges: Array<Maybe<OperationSettingEdge>>;
  /** Total count of operation settings edges */
  totalCount: Scalars['Int'];
};

/** OS Information. Return value may different in user. */
export type Os = {
  __typename?: 'os';
  /** Binary URL for application */
  app_url: Scalars['String'];
  /** Binary URL for bootloader */
  bootloader_url: Scalars['String'];
  /** Information of publicity. */
  isPublic: Scalars['Boolean'];
  /** Binary URL for partition table */
  partition_url: Scalars['String'];
  /** version string */
  version: Scalars['String'];
};

/** Pagenation */
export type PageInfo = {
  __typename?: 'pageInfo';
  /** result has next page */
  hasNextPage: Scalars['Boolean'];
  /** result has previous page */
  hasPreviousPage: Scalars['Boolean'];
};

/** Root of api.obniz.com graphql api endpoint queries */
export type Query = {
  __typename?: 'Query';
  /** My App Configration on obniz.com regarding accessToken. */
  app?: Maybe<App>;
  /** Query App event history. */
  appEvents?: Maybe<AppEvents>;
  device?: Maybe<DeviceNoAuthRequired>;
  /** Devices a user has */
  devices?: Maybe<DeviceConnection>;
  /** User Configured Serverless Events */
  events?: Maybe<EventConnection>;
  /** Registrated obniz hardware list on obniz Cloud */
  hardwares: Array<Maybe<Hardware>>;
  operationResults?: Maybe<OperationResultsConnection>;
  operations?: Maybe<OperationsConnection>;
  operationSettings?: Maybe<OperationSettingsConnection>;
  /** obnizOS versions on obniz Cloud for queried hardware */
  os: Array<Maybe<Os>>;
  /** Token permission. */
  token?: Maybe<Token>;
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** My WebApp Configration on obniz.com regarding accessToken. */
  webapp?: Maybe<Webapp>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryAppEventsArgs = {
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryDeviceArgs = {
  serialUrl?: InputMaybe<Scalars['String']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryDevicesArgs = {
  app?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['first']>;
  hw?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  serialCode?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['skip']>;
  sort?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryEventsArgs = {
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryOperationResultsArgs = {
  first?: InputMaybe<Scalars['first']>;
  operationId?: InputMaybe<Scalars['ID']>;
  operationSettingId?: InputMaybe<Scalars['ID']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryOperationsArgs = {
  facilityName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryOperationSettingsArgs = {
  first?: InputMaybe<Scalars['first']>;
  operationId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['Int']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryOsArgs = {
  hardware: Scalars['String'];
};

export type RemoveOperationResultResponse = {
  __typename?: 'removeOperationResultResponse';
  removed?: Maybe<Scalars['Boolean']>;
};

/** Token object. This contains token information */
export type Token = {
  __typename?: 'token';
  /** device permission. none / read / full  */
  device: Scalars['String'];
  /** device_control permission. none / read / full  */
  device_control: Scalars['String'];
  /** event permission. none / read / full  */
  event: Scalars['String'];
  /** facility permission. none / read / full  */
  facility: Scalars['String'];
  /** Token type. app_token / oauth / api_key */
  type: Scalars['String'];
  /** user permission. none / read / full  */
  user: Scalars['String'];
};

export type UpdateStatusOperationSettingResult = {
  __typename?: 'updateStatusOperationSettingResult';
  updated: Scalars['Boolean'];
};

/** User information */
export type User = {
  __typename?: 'user';
  /** Installed time */
  createdAt: Scalars['Date'];
  /** Credit Point user has */
  credit: Scalars['String'];
  /** email address */
  email?: Maybe<Scalars['String']>;
  /** Unique Identifier */
  id: Scalars['ID'];
  /** user name */
  name?: Maybe<Scalars['String']>;
  /** url for user icon */
  picture?: Maybe<Scalars['String']>;
  /** User Plan on obniz.com */
  plan: Scalars['String'];
};

/** WebApp object. This contains webapp information which created on obniz.com as WebApp */
export type Webapp = {
  __typename?: 'webapp';
  /** Unique Identifier of webapp */
  id: Scalars['ID'];
  /** Query Installed Apps for WebApp. */
  installs?: Maybe<InstallConnection>;
  /** English Description */
  short_body: Scalars['String'];
  /** Current Status on obniz.com Explore App */
  store_status: Scalars['String'];
  /** English Title of WebApp */
  title: Scalars['String'];
  /** Type of WebApp. */
  type: Scalars['String'];
};


/** WebApp object. This contains webapp information which created on obniz.com as WebApp */
export type WebappInstallsArgs = {
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
};

/** Information of currently connected wifi */
export type Wifi = {
  __typename?: 'wifi';
  /** Current connected Accespoint MacAddress. ex) 0123456789AB */
  macAddress?: Maybe<Scalars['String']>;
  /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
  rssi?: Maybe<Scalars['Int']>;
  /** Current connected Accespoint SSID. ex) obniz-wifi */
  ssid?: Maybe<Scalars['String']>;
};

/** Information of currently connected wifimesh */
export type Wifimesh = {
  __typename?: 'wifimesh';
  /** Depth of MESH network. layer=1 is root node of a network. ex ) 1 */
  layer: Scalars['Int'];
  /** MESH ID of Currently joined MESH network. ex) 012345678901 */
  meshid: Scalars['String'];
  /** Id of parent node ex) 0000-0000 */
  parent_obniz_id?: Maybe<Scalars['ID']>;
  /** Id of root node. Root is only connected to The AccessPoint ex) 0000-0000 */
  root_obniz_id?: Maybe<Scalars['ID']>;
  /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
  rssi: Scalars['Int'];
};

export type WebappQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
}>;


export type WebappQuery = { __typename?: 'Query', webapp?: { __typename?: 'webapp', id: string, title: string, short_body: string, type: string, store_status: string, installs?: { __typename?: 'installConnection', totalCount: number, pageInfo: { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename?: 'installEdge', node?: { __typename?: 'install', id: string, configs: string, createdAt: any, updatedAt: any, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, createdAt: any, credit: string } | null } | null } | null> } | null } | null };

export type AppQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
}>;


export type AppQuery = { __typename?: 'Query', app?: { __typename?: 'app', id: string, title: string, short_body: string, type: string, store_status: string, installs?: { __typename?: 'appInstallConnection', totalCount: number, pageInfo: { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename?: 'appInstallEdge', node?: { __typename?: 'installed_device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, createdAt: any, credit: string } | null } | null } | null> } | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null };

export type DevicesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
  id?: InputMaybe<Scalars['String']>;
  hw?: InputMaybe<Scalars['String']>;
  app?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  serialCode?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
}>;


export type DevicesQuery = { __typename?: 'Query', devices?: { __typename?: 'deviceConnection', totalCount: number, pageInfo: { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename?: 'deviceEdge', node?: { __typename?: 'device', id: string, access_token?: string | null, description: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any } | null } | null> } | null };

export type EventsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
}>;


export type EventsQuery = { __typename?: 'Query', events?: { __typename?: 'eventConnection', totalCount: number, pageInfo: { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename?: 'eventEdge', node?: { __typename?: 'event', id: string, name: string, trigger: string, action: string, webhookUri?: string | null, createdAt: any } | null } | null> } | null };

export type HardwaresQueryVariables = Exact<{ [key: string]: never; }>;


export type HardwaresQuery = { __typename?: 'Query', hardwares: Array<{ __typename?: 'hardware', hardware: string, os: string } | null> };

export type OsQueryVariables = Exact<{
  hardware: Scalars['String'];
}>;


export type OsQuery = { __typename?: 'Query', os: Array<{ __typename?: 'os', version: string, app_url: string, bootloader_url: string, partition_url: string } | null> };

export type AppEventsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  skip?: InputMaybe<Scalars['skip']>;
}>;


export type AppEventsQuery = { __typename?: 'Query', appEvents?: { __typename?: 'appEvents', totalCount: number, pageInfo: { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean }, events: Array<{ __typename?: 'appEvent', id: number, createdAt: string, type: string, app: { __typename?: 'appEventApp', id: string }, payload: { __typename?: 'appEventPayload', user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null, device?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null } } | null> } | null };

export type OperationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  facilityName?: InputMaybe<Scalars['String']>;
}>;


export type OperationsQuery = { __typename?: 'Query', operations?: { __typename?: 'operationsConnection', edges: Array<{ __typename?: 'operationEdge', facilityName?: string | null, amountExpectedDevices?: number | null, amountOperatedDevices?: number | null, amountReport?: number | null, errorLevelReport?: string | null, node?: { __typename?: 'operation', id: string, name: string, facilityId: number, completionLevel: number, needPicEvidence: boolean, needLocationNote: boolean, dueDate?: any | null, operationKey: string, createdAt: any } | null } | null> } | null };

export type OperationSettingsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  operationId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['Int']>;
}>;


export type OperationSettingsQuery = { __typename?: 'Query', operationSettings?: { __typename?: 'operationSettingsConnection', totalCount: number, edges: Array<{ __typename?: 'operationSettingEdge', node?: { __typename?: 'operationSetting', id: string, operationId: string, indicationId: string, networkConfigs: string, appId?: number | null, appConfigs: string, description: string, status: number } | null, operationResult?: { __typename?: 'operationResultForOperationSetting', obnizId?: number | null, successfullyWrittenAt?: any | null, becomeOnlineAt?: any | null, picUrl?: string | null, locationNote?: string | null, typeError?: number | null } | null } | null> } | null };

export type OperationResultsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['first']>;
  operationId?: InputMaybe<Scalars['ID']>;
  operationSettingId?: InputMaybe<Scalars['ID']>;
}>;


export type OperationResultsQuery = { __typename?: 'Query', operationResults?: { __typename?: 'operationResultsConnection', totalCount: number, edges: Array<{ __typename?: 'operationResultEdge', node?: { __typename?: 'operationResult', id: string, operationSettingId: string, indicationId: string, obnizId?: number | null, successfullyWrittenAt?: any | null, becomeOnlineAt?: any | null, picUrl?: string | null, locationNote?: string | null, typeError?: number | null } | null } | null> } | null };

export type TokenQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenQuery = { __typename?: 'Query', token?: { __typename?: 'token', type: string, user: string, device: string, event: string, facility: string, device_control: string } | null };

export type CreateEventMutationVariables = Exact<{
  event: EventCreateInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent?: { __typename?: 'event', id: string, name: string, trigger: string, action: string, webhookUri?: string | null, createdAt: any } | null };

export type UpdateEventMutationVariables = Exact<{
  event: EventUpdateInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent?: { __typename?: 'event', id: string, name: string, trigger: string, action: string, webhookUri?: string | null, createdAt: any } | null };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent: string };

export type CreateDeviceMutationVariables = Exact<{
  device: DeviceCreateInput;
}>;


export type CreateDeviceMutation = { __typename?: 'Mutation', createDevice?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type RegistrateDeviceMutationVariables = Exact<{
  device: DeviceRegistrateInput;
}>;


export type RegistrateDeviceMutation = { __typename?: 'Mutation', registrateDevice?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type UpdateDeviceMutationVariables = Exact<{
  device: DeviceUpdateInput;
}>;


export type UpdateDeviceMutation = { __typename?: 'Mutation', updateDevice?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type InstallAppMutationVariables = Exact<{
  install: AppInstallInput;
}>;


export type InstallAppMutation = { __typename?: 'Mutation', installApp?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type UpdateDeviceSettingsForInstalledAppMutationVariables = Exact<{
  updateDeviceSettingsForInstalledApp: DeviceInstalledAppSettingsInput;
}>;


export type UpdateDeviceSettingsForInstalledAppMutation = { __typename?: 'Mutation', updateDeviceSettingsForInstalledApp?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type UninstallAppMutationVariables = Exact<{
  uninstallApp: AppUninstallInput;
}>;


export type UninstallAppMutation = { __typename?: 'Mutation', uninstallApp?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type GenerateDeviceAccessTokenMutationVariables = Exact<{
  generateDeviceAccessToken: DeviceGenerateAccessTokenInput;
}>;


export type GenerateDeviceAccessTokenMutation = { __typename?: 'Mutation', generateDeviceAccessToken?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type DeleteDeviceAccessTokenMutationVariables = Exact<{
  deleteDeviceAccessToken: DeviceDeleteAccessTokenInput;
}>;


export type DeleteDeviceAccessTokenMutation = { __typename?: 'Mutation', deleteDeviceAccessToken?: { __typename?: 'device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, credit: string, createdAt: any } | null } | null };

export type UpdateStatusOperationSettingMutationVariables = Exact<{
  operationSettingId: Scalars['ID'];
}>;


export type UpdateStatusOperationSettingMutation = { __typename?: 'Mutation', updateStatusOperationSetting?: { __typename?: 'updateStatusOperationSettingResult', updated: boolean } | null };

export type CreateOperationResultMutationVariables = Exact<{
  operationResult: CreateOperationResultInput;
}>;


export type CreateOperationResultMutation = { __typename?: 'Mutation', createOperationResult?: { __typename?: 'operationResult', id: string, operationSettingId: string, indicationId: string, obnizId?: number | null, successfullyWrittenAt?: any | null, becomeOnlineAt?: any | null, picUrl?: string | null, locationNote?: string | null, typeError?: number | null } | null };

export type RemoveOperationResultMutationVariables = Exact<{
  operationSettingId: Scalars['ID'];
}>;


export type RemoveOperationResultMutation = { __typename?: 'Mutation', removeOperationResult?: { __typename?: 'removeOperationResultResponse', removed?: boolean | null } | null };

export type PageInfoFieldsFragment = { __typename?: 'pageInfo', hasPreviousPage: boolean, hasNextPage: boolean };

export type InstallEdgeFieldsFragment = { __typename?: 'installEdge', node?: { __typename?: 'install', id: string, configs: string, createdAt: any, updatedAt: any, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, createdAt: any, credit: string } | null } | null };

export type AppInstallEdgeFieldsFragment = { __typename?: 'appInstallEdge', node?: { __typename?: 'installed_device', id: string, access_token?: string | null, description: string, metadata: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any, configs: string, user?: { __typename?: 'user', id: string, name?: string | null, email?: string | null, picture?: string | null, plan: string, createdAt: any, credit: string } | null } | null };

export type DeviceEdgeFieldsFragment = { __typename?: 'deviceEdge', node?: { __typename?: 'device', id: string, access_token?: string | null, description: string, devicekey?: string | null, hardware: string, os: string, osVersion: string, region: string, status: string, createdAt: any } | null };

export type EventEdgeFieldsFragment = { __typename?: 'eventEdge', node?: { __typename?: 'event', id: string, name: string, trigger: string, action: string, webhookUri?: string | null, createdAt: any } | null };

export const PageInfoFieldsFragmentDoc = gql`
    fragment pageInfoFields on pageInfo {
  hasPreviousPage
  hasNextPage
}
    `;
export const InstallEdgeFieldsFragmentDoc = gql`
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
export const AppInstallEdgeFieldsFragmentDoc = gql`
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
export const DeviceEdgeFieldsFragmentDoc = gql`
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
export const EventEdgeFieldsFragmentDoc = gql`
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
export const WebappDocument = gql`
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
    ${PageInfoFieldsFragmentDoc}
${InstallEdgeFieldsFragmentDoc}`;
export const AppDocument = gql`
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
    ${PageInfoFieldsFragmentDoc}
${AppInstallEdgeFieldsFragmentDoc}`;
export const UserDocument = gql`
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
export const DevicesDocument = gql`
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
    ${PageInfoFieldsFragmentDoc}
${DeviceEdgeFieldsFragmentDoc}`;
export const EventsDocument = gql`
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
    ${PageInfoFieldsFragmentDoc}
${EventEdgeFieldsFragmentDoc}`;
export const HardwaresDocument = gql`
    query hardwares {
  hardwares {
    hardware
    os
  }
}
    `;
export const OsDocument = gql`
    query os($hardware: String!) {
  os(hardware: $hardware) {
    version
    app_url
    bootloader_url
    partition_url
  }
}
    `;
export const AppEventsDocument = gql`
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
    ${PageInfoFieldsFragmentDoc}`;
export const OperationsDocument = gql`
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
export const OperationSettingsDocument = gql`
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
export const OperationResultsDocument = gql`
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
export const TokenDocument = gql`
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
export const CreateEventDocument = gql`
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
export const UpdateEventDocument = gql`
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
export const DeleteEventDocument = gql`
    mutation deleteEvent($id: ID!) {
  deleteEvent(id: $id)
}
    `;
export const CreateDeviceDocument = gql`
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
export const RegistrateDeviceDocument = gql`
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
export const UpdateDeviceDocument = gql`
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
export const InstallAppDocument = gql`
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
export const UpdateDeviceSettingsForInstalledAppDocument = gql`
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
export const UninstallAppDocument = gql`
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
export const GenerateDeviceAccessTokenDocument = gql`
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
export const DeleteDeviceAccessTokenDocument = gql`
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
export const UpdateStatusOperationSettingDocument = gql`
    mutation updateStatusOperationSetting($operationSettingId: ID!) {
  updateStatusOperationSetting(operationSettingId: $operationSettingId) {
    updated
  }
}
    `;
export const CreateOperationResultDocument = gql`
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
export const RemoveOperationResultDocument = gql`
    mutation removeOperationResult($operationSettingId: ID!) {
  removeOperationResult(operationSettingId: $operationSettingId) {
    removed
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    webapp(variables?: WebappQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WebappQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WebappQuery>(WebappDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'webapp', 'query');
    },
    app(variables?: AppQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AppQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AppQuery>(AppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'app', 'query');
    },
    user(variables?: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    devices(variables?: DevicesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DevicesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DevicesQuery>(DevicesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'devices', 'query');
    },
    events(variables?: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'events', 'query');
    },
    hardwares(variables?: HardwaresQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HardwaresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HardwaresQuery>(HardwaresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'hardwares', 'query');
    },
    os(variables: OsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OsQuery>(OsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'os', 'query');
    },
    appEvents(variables?: AppEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AppEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AppEventsQuery>(AppEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'appEvents', 'query');
    },
    operations(variables?: OperationsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OperationsQuery>(OperationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'operations', 'query');
    },
    operationSettings(variables?: OperationSettingsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OperationSettingsQuery>(OperationSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'operationSettings', 'query');
    },
    operationResults(variables?: OperationResultsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationResultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OperationResultsQuery>(OperationResultsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'operationResults', 'query');
    },
    token(variables?: TokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenQuery>(TokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'token', 'query');
    },
    createEvent(variables: CreateEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateEventMutation>(CreateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createEvent', 'mutation');
    },
    updateEvent(variables: UpdateEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEventMutation>(UpdateEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateEvent', 'mutation');
    },
    deleteEvent(variables: DeleteEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteEventMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteEventMutation>(DeleteEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteEvent', 'mutation');
    },
    createDevice(variables: CreateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDeviceMutation>(CreateDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDevice', 'mutation');
    },
    registrateDevice(variables: RegistrateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegistrateDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegistrateDeviceMutation>(RegistrateDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registrateDevice', 'mutation');
    },
    updateDevice(variables: UpdateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDeviceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDeviceMutation>(UpdateDeviceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDevice', 'mutation');
    },
    installApp(variables: InstallAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InstallAppMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InstallAppMutation>(InstallAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'installApp', 'mutation');
    },
    updateDeviceSettingsForInstalledApp(variables: UpdateDeviceSettingsForInstalledAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDeviceSettingsForInstalledAppMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDeviceSettingsForInstalledAppMutation>(UpdateDeviceSettingsForInstalledAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDeviceSettingsForInstalledApp', 'mutation');
    },
    uninstallApp(variables: UninstallAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UninstallAppMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UninstallAppMutation>(UninstallAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'uninstallApp', 'mutation');
    },
    generateDeviceAccessToken(variables: GenerateDeviceAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateDeviceAccessTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateDeviceAccessTokenMutation>(GenerateDeviceAccessTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generateDeviceAccessToken', 'mutation');
    },
    deleteDeviceAccessToken(variables: DeleteDeviceAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDeviceAccessTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteDeviceAccessTokenMutation>(DeleteDeviceAccessTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteDeviceAccessToken', 'mutation');
    },
    updateStatusOperationSetting(variables: UpdateStatusOperationSettingMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStatusOperationSettingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateStatusOperationSettingMutation>(UpdateStatusOperationSettingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateStatusOperationSetting', 'mutation');
    },
    createOperationResult(variables: CreateOperationResultMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOperationResultMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOperationResultMutation>(CreateOperationResultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOperationResult', 'mutation');
    },
    removeOperationResult(variables: RemoveOperationResultMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveOperationResultMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveOperationResultMutation>(RemoveOperationResultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeOperationResult', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;