import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** [Int] Limitation of query results. range is 1..50 */
  first: any;
  /** [Int] offset of query results. range is 0<= */
  skip: any;
  /** ISO-8601 Format DateTime */
  Date: any;
};

/** Root of api.obniz.com graphql api endpoint queries */
export type Query = {
   __typename?: 'Query';
  /** My WebApp Configration on obniz.com regarding accessToken. */
  webapp?: Maybe<Webapp>;
  /** My App Configration on obniz.com regarding accessToken. */
  app?: Maybe<App>;
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** Devices a user has */
  devices?: Maybe<DeviceConnection>;
  /** User Configured Serverless Events */
  events?: Maybe<EventConnection>;
  /** Registrated obniz hardware list on obniz Cloud */
  hardwares: Array<Maybe<Hardware>>;
  /** obnizOS versions on obniz Cloud for queried hardware */
  os: Array<Maybe<Os>>;
  /** Query App event history. */
  appEvents?: Maybe<App_Events>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryDevicesArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
  id?: Maybe<Scalars['String']>;
  hw?: Maybe<Scalars['String']>;
  app?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['String']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryEventsArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryOsArgs = {
  hardware: Scalars['String'];
};


/** Root of api.obniz.com graphql api endpoint queries */
export type QueryAppEventsArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};

/** WebApp object. This contains webapp information which created on obniz.com as WebApp */
export type Webapp = {
   __typename?: 'webapp';
  /** Unique Identifier of webapp */
  id: Scalars['ID'];
  /** English Title of WebApp */
  title: Scalars['String'];
  /** English Description */
  short_body: Scalars['String'];
  /** Type of WebApp. */
  type: Scalars['String'];
  /** Current Status on obniz.com Explore App */
  store_status: Scalars['String'];
  /** Query Installed Apps for WebApp. */
  installs?: Maybe<InstallConnection>;
};


/** WebApp object. This contains webapp information which created on obniz.com as WebApp */
export type WebappInstallsArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};



/** Connection of Install */
export type InstallConnection = {
   __typename?: 'installConnection';
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
  /** Page Information */
  pageInfo: PageInfo;
  /** Edges */
  edges: Array<Maybe<InstallEdge>>;
};

/** Pagenation */
export type PageInfo = {
   __typename?: 'pageInfo';
  /** result has next page */
  hasNextPage: Scalars['Boolean'];
  /** result has previous page */
  hasPreviousPage: Scalars['Boolean'];
};

/** Install Edge */
export type InstallEdge = {
   __typename?: 'installEdge';
  /** Cursor */
  node?: Maybe<Install>;
};

/** Installed WebApp object. This contains user installed webapp configration */
export type Install = {
   __typename?: 'install';
  /** Unique Identifier of install */
  id: Scalars['ID'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** Installed time */
  createdAt: Scalars['Date'];
  /** Updated time */
  updatedAt: Scalars['Date'];
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
};

/** User information */
export type User = {
   __typename?: 'user';
  /** Unique Identifier */
  id: Scalars['ID'];
  /** user name */
  name?: Maybe<Scalars['String']>;
  /** email address */
  email?: Maybe<Scalars['String']>;
  /** url for user icon */
  picture?: Maybe<Scalars['String']>;
  /** User Plan on obniz.com */
  plan: Scalars['String'];
  /** Credit Point user has */
  credit: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
};


/** App object. This contains app information which created on obniz.com as App */
export type App = {
   __typename?: 'app';
  /** Unique Identifier of app */
  id: Scalars['ID'];
  /** English Title of app */
  title: Scalars['String'];
  /** English Description */
  short_body: Scalars['String'];
  /** Type of app. */
  type: Scalars['String'];
  /** Current Status on obniz.com app on explore */
  store_status: Scalars['String'];
  /** Query Installs for an App. */
  installs?: Maybe<AppInstallConnection>;
};


/** App object. This contains app information which created on obniz.com as App */
export type AppInstallsArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};

/** Connection of Install */
export type AppInstallConnection = {
   __typename?: 'appInstallConnection';
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
  /** Page Information */
  pageInfo: PageInfo;
  /** Edges */
  edges: Array<Maybe<AppInstallEdge>>;
};

/** Install Edge */
export type AppInstallEdge = {
   __typename?: 'appInstallEdge';
  /** Cursor */
  node?: Maybe<Installed_Device>;
};

/** Device information */
export type Installed_Device = {
   __typename?: 'installed_device';
  /** Unique Identifier like "0000-0000" */
  id: Scalars['ID'];
  /** Access Token */
  access_token?: Maybe<Scalars['String']>;
  /**
   * Description
   * 
   *       Same value are exist on metadata.description
   */
  description: Scalars['String'];
  /**
   * User Defined Metadata JSON string
   * 
   *       Useful for labeling device location or attached machine.
   */
  metadata: Scalars['String'];
  /**
   * DeviceKey
   * 
   *       String representation of DeviceKey which installed or to be installed on the device.
   */
  devicekey?: Maybe<Scalars['String']>;
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
   */
  hardware: Scalars['String'];
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
   */
  os: Scalars['String'];
  /** Last time recognized os version like '1.0.0' */
  osVersion: Scalars['String'];
  /**
   * Server Region
   * 
   *       'jp': Japan(East Asia)
   * 
   *       'us': United States of America(West-America)
   */
  region: Scalars['String'];
  /**
   * Status
   * 
   *       'active': activated
   * 
   *       'inactive': inactivated
   */
  status: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
};

/** Connection of Device */
export type DeviceConnection = {
   __typename?: 'deviceConnection';
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
  /** Page Information */
  pageInfo: PageInfo;
  /** Edges */
  edges: Array<Maybe<DeviceEdge>>;
};

/** Device Edge */
export type DeviceEdge = {
   __typename?: 'deviceEdge';
  /** Cursor */
  node?: Maybe<Device>;
};

/** Device information */
export type Device = {
   __typename?: 'device';
  /** Unique Identifier like "0000-0000" */
  id: Scalars['ID'];
  /** Access Token */
  access_token?: Maybe<Scalars['String']>;
  /**
   * Description
   * 
   *       Same value are exist on metadata.description
   */
  description: Scalars['String'];
  /**
   * User Defined Metadata JSON string
   * 
   *       Useful for labeling device location or attached machine.
   */
  metadata: Scalars['String'];
  /**
   * DeviceKey
   * 
   *       String representation of DeviceKey which installed or to be installed on the device.
   */
  devicekey?: Maybe<Scalars['String']>;
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
   */
  hardware: Scalars['String'];
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
   */
  os: Scalars['String'];
  /** Last time recognized os version like '1.0.0' */
  osVersion: Scalars['String'];
  /**
   * Server Region
   * 
   *       'jp': Japan(East Asia)
   * 
   *       'us': United States of America(West-America)
   */
  region: Scalars['String'];
  /**
   * Status
   * 
   *       'active': activated
   * 
   *       'inactive': inactivated
   */
  status: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** JSON Representation of Installed app configration */
  configs: Scalars['String'];
};

/** Connection of Event */
export type EventConnection = {
   __typename?: 'eventConnection';
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
  /** Page Information */
  pageInfo: PageInfo;
  /** Edges */
  edges: Array<Maybe<EventEdge>>;
};

/** Event Edge */
export type EventEdge = {
   __typename?: 'eventEdge';
  /** Cursor */
  node?: Maybe<Event>;
};

/** ServerlessEvent */
export type Event = {
   __typename?: 'event';
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
   */
  trigger: Scalars['String'];
  /**
   * Action uri
   * 
   *       '{filename_in_repo}': 
   * 
   *       'webapp://{install_id}/run': installed webapp
   */
  action: Scalars['String'];
  /** webhook Endpoint if trigger is webhook. */
  webhookUri?: Maybe<Scalars['String']>;
  /** Created time */
  createdAt: Scalars['Date'];
};

/** Hardware Information. This indicate related os information for each hardware */
export type Hardware = {
   __typename?: 'hardware';
  /** Hardware Identifier  */
  hardware: Scalars['String'];
  /** OS identifier for hardware. */
  os: Scalars['String'];
};

/** OS Information. Return value may different in user. */
export type Os = {
   __typename?: 'os';
  /** version string */
  version: Scalars['String'];
  /** Binary URL for application */
  app_url: Scalars['String'];
  /** Binary URL for bootloader */
  bootloader_url: Scalars['String'];
  /** Binary URL for partition table */
  partition_url: Scalars['String'];
};

/** Connection of Device */
export type App_Events = {
   __typename?: 'app_events';
  /** Total Count of device edges */
  totalCount: Scalars['Int'];
  /** Page Information */
  pageInfo: PageInfo;
  /** Events */
  events: Array<Maybe<App_Event>>;
};

/** This contains information that was sent by the webhook in the past. */
export type App_Event = {
   __typename?: 'app_event';
  /** Unique Identifier of webhook for webapp */
  id: Scalars['Int'];
  /** The date and time the webhook was sent. */
  createdAt: Scalars['String'];
  /** Type of event, */
  type: Scalars['String'];
  app: App_Event_App;
  payload: App_Event_Payload;
};

export type App_Event_App = {
   __typename?: 'app_event_app';
  /** Unique Identifier of webapp */
  id: Scalars['ID'];
};

/** Contains any of the following objects. */
export type App_Event_Payload = {
   __typename?: 'app_event_payload';
  user?: Maybe<User>;
  device?: Maybe<Device>;
};

/** Root of api.obniz.com graphql api endpoint mutations */
export type Mutation = {
   __typename?: 'Mutation';
  /** Create New Event */
  createEvent?: Maybe<Event>;
  /** Update Exist Event */
  updateEvent?: Maybe<Event>;
  /** Delete Exist Event */
  deleteEvent: Scalars['ID'];
  /** Create New Device */
  createDevice?: Maybe<Device>;
  /** Registration New Device */
  registrateDevice?: Maybe<Device>;
  /** Update Device */
  updateDevice?: Maybe<Device>;
  /** Generate Device Access Token */
  generateDeviceAccessToken?: Maybe<Device>;
  /** Delete Device Access Token */
  deleteDeviceAccessToken?: Maybe<Device>;
  /** Edit Settings For Installed App */
  updateDeviceSettingsForInstalledApp?: Maybe<Device>;
  /** Install App To Device */
  installApp?: Maybe<Device>;
  /** Install App To Device */
  uninstallApp?: Maybe<Device>;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateEventArgs = {
  event: EventCreateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateEventArgs = {
  event: EventUpdateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationCreateDeviceArgs = {
  device: DeviceCreateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationRegistrateDeviceArgs = {
  device: DeviceRegistrateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateDeviceArgs = {
  device: DeviceUpdateInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationGenerateDeviceAccessTokenArgs = {
  device: DeviceGenerateAccessTokenInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationDeleteDeviceAccessTokenArgs = {
  device: DeviceDeleteAccessTokenInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUpdateDeviceSettingsForInstalledAppArgs = {
  edit: DeviceInstalledAppSettingsInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationInstallAppArgs = {
  install: AppInstallInput;
};


/** Root of api.obniz.com graphql api endpoint mutations */
export type MutationUninstallAppArgs = {
  uninstall: AppUninstallInput;
};

export type EventCreateInput = {
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
   */
  trigger: Scalars['String'];
  /**
   * Action uri
   * 
   *       '{filename_in_repo}': 
   * 
   *       'webapp://{install_id}/run': installed webapp
   */
  action: Scalars['String'];
};

export type EventUpdateInput = {
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
   */
  trigger: Scalars['String'];
  /**
   * Action uri
   *       '{filename_in_repo}': 
   *       'webapp://{install_id}/run': installed webapp
   */
  action: Scalars['String'];
};

export type DeviceCreateInput = {
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
   */
  region?: Maybe<Scalars['String']>;
  /**
   * Description
   * 
   *       User Defined Metadata. Useful for labeling device location or attached machine.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Description
   * 
   *       Option for manufacturer
   */
  serialdata?: Maybe<Scalars['String']>;
};

export type DeviceRegistrateInput = {
  /** It can be obtained from the QR Code on the device. */
  registrateUrl: Scalars['String'];
};

export type DeviceUpdateInput = {
  /** obnizID */
  id: Scalars['ID'];
  /**
   * Server Region
   * 
   *       'jp': Japan(East Asia)
   * 
   *       'us': United States of America(West-America)
   */
  region?: Maybe<Scalars['String']>;
  /**
   * Use Defined Description
   * 
   *       Same value are exist on metadata.description
   */
  description?: Maybe<Scalars['String']>;
  /**
   * User Defined Metadata key-value JSON string
   * 
   *       Only key:string and value:string is accepted 
   *       Useful for labeling device location or attached machine.
   */
  metadata?: Maybe<Scalars['String']>;
  /**
   * Status
   * 
   *       'active': activated
   * 
   *       'inactive': inactivated
   */
  status?: Maybe<Scalars['String']>;
};

export type DeviceGenerateAccessTokenInput = {
  obniz?: Maybe<DeviceGenerateAccessTokenInputDevice>;
};

export type DeviceGenerateAccessTokenInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

export type DeviceDeleteAccessTokenInput = {
  obniz?: Maybe<DeviceDeleteAccessTokenInputDevice>;
};

export type DeviceDeleteAccessTokenInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

export type DeviceInstalledAppSettingsInput = {
  obniz?: Maybe<DeviceInstalledAppSettingsInputDevice>;
  app?: Maybe<DeviceInstalledAppSettingsInputApp>;
};

export type DeviceInstalledAppSettingsInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

export type DeviceInstalledAppSettingsInputApp = {
  config: Array<AppConfigInput>;
};

export type AppConfigInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AppInstallInput = {
  obniz?: Maybe<AppInstallInputDevice>;
  app?: Maybe<AppInstallInputApp>;
};

export type AppInstallInputDevice = {
  /** obnizID */
  id: Scalars['ID'];
};

export type AppInstallInputApp = {
  /** appID */
  id: Scalars['ID'];
  config: Array<AppConfigInput>;
};

export type AppUninstallInput = {
  obniz?: Maybe<AppUninstallInputDevice>;
};

export type AppUninstallInputDevice = {
  /** obnizID */
  id: Scalars['String'];
};

export type WebappQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type WebappQuery = (
  { __typename?: 'Query' }
  & { webapp?: Maybe<(
    { __typename?: 'webapp' }
    & Pick<Webapp, 'id' | 'title' | 'short_body' | 'type' | 'store_status'>
    & { installs?: Maybe<(
      { __typename?: 'installConnection' }
      & Pick<InstallConnection, 'totalCount'>
      & { pageInfo: (
        { __typename?: 'pageInfo' }
        & PageInfoFieldsFragment
      ), edges: Array<Maybe<(
        { __typename?: 'installEdge' }
        & InstallEdgeFieldsFragment
      )>> }
    )> }
  )> }
);

export type AppQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type AppQuery = (
  { __typename?: 'Query' }
  & { app?: Maybe<(
    { __typename?: 'app' }
    & Pick<App, 'id' | 'title' | 'short_body' | 'type' | 'store_status'>
    & { installs?: Maybe<(
      { __typename?: 'appInstallConnection' }
      & Pick<AppInstallConnection, 'totalCount'>
      & { pageInfo: (
        { __typename?: 'pageInfo' }
        & PageInfoFieldsFragment
      ), edges: Array<Maybe<(
        { __typename?: 'appInstallEdge' }
        & AppInstallEdgeFieldsFragment
      )>> }
    )> }
  )> }
);

export type UserQueryVariables = {};


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>
  )> }
);

export type DevicesQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type DevicesQuery = (
  { __typename?: 'Query' }
  & { devices?: Maybe<(
    { __typename?: 'deviceConnection' }
    & Pick<DeviceConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'pageInfo' }
      & PageInfoFieldsFragment
    ), edges: Array<Maybe<(
      { __typename?: 'deviceEdge' }
      & DeviceEdgeFieldsFragment
    )>> }
  )> }
);

export type EventsQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<(
    { __typename?: 'eventConnection' }
    & Pick<EventConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'pageInfo' }
      & PageInfoFieldsFragment
    ), edges: Array<Maybe<(
      { __typename?: 'eventEdge' }
      & EventEdgeFieldsFragment
    )>> }
  )> }
);

export type AppEventsQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type AppEventsQuery = (
  { __typename?: 'Query' }
  & { appEvents?: Maybe<(
    { __typename?: 'app_events' }
    & Pick<App_Events, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'pageInfo' }
      & PageInfoFieldsFragment
    ), events: Array<Maybe<(
      { __typename?: 'app_event' }
      & Pick<App_Event, 'id' | 'createdAt' | 'type'>
      & { app: (
        { __typename?: 'app_event_app' }
        & Pick<App_Event_App, 'id'>
      ), payload: (
        { __typename?: 'app_event_payload' }
        & { user?: Maybe<(
          { __typename?: 'user' }
          & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>
        )>, device?: Maybe<(
          { __typename?: 'device' }
          & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
          & { user?: Maybe<(
            { __typename?: 'user' }
            & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>
          )> }
        )> }
      ) }
    )>> }
  )> }
);

export type RegistrateDeviceMutationVariables = {
  device: DeviceRegistrateInput;
};


export type RegistrateDeviceMutation = (
  { __typename?: 'Mutation' }
  & { registrateDevice?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
  )> }
);

export type InstallAppMutationVariables = {
  install: AppInstallInput;
};


export type InstallAppMutation = (
  { __typename?: 'Mutation' }
  & { installApp?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
  )> }
);

export type UninstallAppMutationVariables = {
  uninstallApp: AppUninstallInput;
};


export type UninstallAppMutation = (
  { __typename?: 'Mutation' }
  & { uninstallApp?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
  )> }
);

export type GenerateDeviceAccessTokenMutationVariables = {
  generateDeviceAccessToken: DeviceGenerateAccessTokenInput;
};


export type GenerateDeviceAccessTokenMutation = (
  { __typename?: 'Mutation' }
  & { generateDeviceAccessToken?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
  )> }
);

export type DeleteDeviceAccessTokenMutationVariables = {
  deleteDeviceAccessToken: DeviceDeleteAccessTokenInput;
};


export type DeleteDeviceAccessTokenMutation = (
  { __typename?: 'Mutation' }
  & { deleteDeviceAccessToken?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
  )> }
);

export type PageInfoFieldsFragment = (
  { __typename?: 'pageInfo' }
  & Pick<PageInfo, 'hasPreviousPage' | 'hasNextPage'>
);

export type InstallEdgeFieldsFragment = (
  { __typename?: 'installEdge' }
  & { node?: Maybe<(
    { __typename?: 'install' }
    & Pick<Install, 'id' | 'configs' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'createdAt' | 'credit'>
    )> }
  )> }
);

export type AppInstallEdgeFieldsFragment = (
  { __typename?: 'appInstallEdge' }
  & { node?: Maybe<(
    { __typename?: 'installed_device' }
    & Pick<Installed_Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>
    & { user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'createdAt' | 'credit'>
    )> }
  )> }
);

export type DeviceEdgeFieldsFragment = (
  { __typename?: 'deviceEdge' }
  & { node?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt'>
  )> }
);

export type EventEdgeFieldsFragment = (
  { __typename?: 'eventEdge' }
  & { node?: Maybe<(
    { __typename?: 'event' }
    & Pick<Event, 'id' | 'name' | 'trigger' | 'action' | 'webhookUri' | 'createdAt'>
  )> }
);

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
    query devices($first: first, $skip: skip) {
  devices(first: $first, skip: $skip) {
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
    configs
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    webapp(variables?: WebappQueryVariables): Promise<WebappQuery> {
      return withWrapper(() => client.request<WebappQuery>(print(WebappDocument), variables));
    },
    app(variables?: AppQueryVariables): Promise<AppQuery> {
      return withWrapper(() => client.request<AppQuery>(print(AppDocument), variables));
    },
    user(variables?: UserQueryVariables): Promise<UserQuery> {
      return withWrapper(() => client.request<UserQuery>(print(UserDocument), variables));
    },
    devices(variables?: DevicesQueryVariables): Promise<DevicesQuery> {
      return withWrapper(() => client.request<DevicesQuery>(print(DevicesDocument), variables));
    },
    events(variables?: EventsQueryVariables): Promise<EventsQuery> {
      return withWrapper(() => client.request<EventsQuery>(print(EventsDocument), variables));
    },
    appEvents(variables?: AppEventsQueryVariables): Promise<AppEventsQuery> {
      return withWrapper(() => client.request<AppEventsQuery>(print(AppEventsDocument), variables));
    },
    registrateDevice(variables: RegistrateDeviceMutationVariables): Promise<RegistrateDeviceMutation> {
      return withWrapper(() => client.request<RegistrateDeviceMutation>(print(RegistrateDeviceDocument), variables));
    },
    installApp(variables: InstallAppMutationVariables): Promise<InstallAppMutation> {
      return withWrapper(() => client.request<InstallAppMutation>(print(InstallAppDocument), variables));
    },
    uninstallApp(variables: UninstallAppMutationVariables): Promise<UninstallAppMutation> {
      return withWrapper(() => client.request<UninstallAppMutation>(print(UninstallAppDocument), variables));
    },
    generateDeviceAccessToken(variables: GenerateDeviceAccessTokenMutationVariables): Promise<GenerateDeviceAccessTokenMutation> {
      return withWrapper(() => client.request<GenerateDeviceAccessTokenMutation>(print(GenerateDeviceAccessTokenDocument), variables));
    },
    deleteDeviceAccessToken(variables: DeleteDeviceAccessTokenMutationVariables): Promise<DeleteDeviceAccessTokenMutation> {
      return withWrapper(() => client.request<DeleteDeviceAccessTokenMutation>(print(DeleteDeviceAccessTokenDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;