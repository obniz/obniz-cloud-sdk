import { GraphQLClient } from 'graphql-request';
export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type Query = {
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
    appEvents?: Maybe<AppEvents>;
    operations?: Maybe<OperationsConnection>;
    operationSettings?: Maybe<OperationSettingsConnection>;
    operationResults?: Maybe<OperationResultsConnection>;
    /** Token permission. */
    token?: Maybe<Token>;
    device?: Maybe<DeviceNoAuthRequired>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryDevicesArgs = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
    id?: Maybe<Scalars['String']>;
    hw?: Maybe<Scalars['String']>;
    app?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['String']>;
    serialCode?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryEventsArgs = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOsArgs = {
    hardware: Scalars['String'];
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryAppEventsArgs = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationsArgs = {
    id?: Maybe<Scalars['Int']>;
    facilityName?: Maybe<Scalars['String']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationSettingsArgs = {
    first?: Maybe<Scalars['first']>;
    operationId?: Maybe<Scalars['ID']>;
    status?: Maybe<Scalars['Int']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationResultsArgs = {
    first?: Maybe<Scalars['first']>;
    operationId?: Maybe<Scalars['ID']>;
    operationSettingId?: Maybe<Scalars['ID']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryDeviceArgs = {
    serialUrl?: Maybe<Scalars['String']>;
};
/** WebApp object. This contains webapp information which created on obniz.com as WebApp */
export declare type Webapp = {
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
export declare type WebappInstallsArgs = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
/** Connection of Install */
export declare type InstallConnection = {
    __typename?: 'installConnection';
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
    /** Page Information */
    pageInfo: PageInfo;
    /** Edges */
    edges: Array<Maybe<InstallEdge>>;
};
/** Pagenation */
export declare type PageInfo = {
    __typename?: 'pageInfo';
    /** result has next page */
    hasNextPage: Scalars['Boolean'];
    /** result has previous page */
    hasPreviousPage: Scalars['Boolean'];
};
/** Install Edge */
export declare type InstallEdge = {
    __typename?: 'installEdge';
    /** Cursor */
    node?: Maybe<Install>;
};
/** Installed WebApp object. This contains user installed webapp configration */
export declare type Install = {
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
export declare type User = {
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
export declare type App = {
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
export declare type AppInstallsArgs = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
/** Connection of Install */
export declare type AppInstallConnection = {
    __typename?: 'appInstallConnection';
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
    /** Page Information */
    pageInfo: PageInfo;
    /** Edges */
    edges: Array<Maybe<AppInstallEdge>>;
};
/** Install Edge */
export declare type AppInstallEdge = {
    __typename?: 'appInstallEdge';
    /** Cursor */
    node?: Maybe<Installed_Device>;
};
/** Device information */
export declare type Installed_Device = {
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
    /** Online Check Interval in minutes. By default it is null and automatic interval under 1 minutes. */
    pingInterval?: Maybe<Scalars['Int']>;
    /** Installed time */
    createdAt: Scalars['Date'];
    /** Device Live Information. */
    deviceLiveInfo?: Maybe<DeviceLiveInfo>;
    /** User information which is authorized for current Access Token. */
    user?: Maybe<User>;
    /** JSON Representation of Installed app configration */
    configs: Scalars['String'];
};
/** Device Live Information. */
export declare type DeviceLiveInfo = {
    __typename?: 'deviceLiveInfo';
    /** Live Information. Device is Online or Offline */
    isOnline: Scalars['Boolean'];
    /** The time device become online on the cloud */
    onlineAt?: Maybe<Scalars['Date']>;
    /** The time device become offline on the cloud */
    offlineAt?: Maybe<Scalars['Date']>;
    /** Live Information. Connected Wi-Fi and RSSI and other related. */
    connectedNetwork?: Maybe<ConnectedNetwork>;
};
/** Information of currently connected network  */
export declare type ConnectedNetwork = {
    __typename?: 'connectedNetwork';
    /** The time device become online on the cloud */
    online_at: Scalars['Date'];
    /** Current connected network type. Defined in setting json. ex) wirelesslan */
    net: Scalars['String'];
    /** Local IP If exist. ex) 192.168.0.100 */
    local_ip?: Maybe<Scalars['String']>;
    /** Global IP if exist. ex) 201.200.199.198 */
    global_ip?: Maybe<Scalars['String']>;
    /** Wi-Fi information if network type is wifi */
    wifi?: Maybe<Wifi>;
    /** Wi-Fi Mesh information if network type is wifimesh */
    wifimesh?: Maybe<Wifimesh>;
};
/** Information of currently connected wifi */
export declare type Wifi = {
    __typename?: 'wifi';
    /** Current connected Accespoint SSID. ex) obniz-wifi */
    ssid?: Maybe<Scalars['String']>;
    /** Current connected Accespoint MacAddress. ex) 0123456789AB */
    macAddress?: Maybe<Scalars['String']>;
    /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
    rssi?: Maybe<Scalars['Int']>;
};
/** Information of currently connected wifimesh */
export declare type Wifimesh = {
    __typename?: 'wifimesh';
    /** MESH ID of Currently joined MESH network. ex) 012345678901 */
    meshid: Scalars['String'];
    /** Id of parent node ex) 0000-0000 */
    parent_obniz_id?: Maybe<Scalars['ID']>;
    /** Id of root node. Root is only connected to The AccessPoint ex) 0000-0000 */
    root_obniz_id?: Maybe<Scalars['ID']>;
    /** Depth of MESH network. layer=1 is root node of a network. ex ) 1 */
    layer: Scalars['Int'];
    /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
    rssi: Scalars['Int'];
};
/** Connection of Device */
export declare type DeviceConnection = {
    __typename?: 'deviceConnection';
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
    /** Page Information */
    pageInfo: PageInfo;
    /** Edges */
    edges: Array<Maybe<DeviceEdge>>;
};
/** Device Edge */
export declare type DeviceEdge = {
    __typename?: 'deviceEdge';
    /** Cursor */
    node?: Maybe<Device>;
};
/** Device information */
export declare type Device = {
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
    /** Online Check Interval in minutes. By default it is null and automatic interval under 1 minutes. */
    pingInterval?: Maybe<Scalars['Int']>;
    /** Installed time */
    createdAt: Scalars['Date'];
    /** Device Live Information. */
    deviceLiveInfo?: Maybe<DeviceLiveInfo>;
    /** User information which is authorized for current Access Token. */
    user?: Maybe<User>;
    /** JSON Representation of Installed app configration */
    configs: Scalars['String'];
};
/** Connection of Event */
export declare type EventConnection = {
    __typename?: 'eventConnection';
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
    /** Page Information */
    pageInfo: PageInfo;
    /** Edges */
    edges: Array<Maybe<EventEdge>>;
};
/** Event Edge */
export declare type EventEdge = {
    __typename?: 'eventEdge';
    /** Cursor */
    node?: Maybe<Event>;
};
/** ServerlessEvent */
export declare type Event = {
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
export declare type Hardware = {
    __typename?: 'hardware';
    /** Hardware Identifier  */
    hardware: Scalars['String'];
    /** OS identifier for hardware. */
    os: Scalars['String'];
};
/** OS Information. Return value may different in user. */
export declare type Os = {
    __typename?: 'os';
    /** version string */
    version: Scalars['String'];
    /** Binary URL for application */
    app_url: Scalars['String'];
    /** Binary URL for bootloader */
    bootloader_url: Scalars['String'];
    /** Binary URL for partition table */
    partition_url: Scalars['String'];
    /** Information of publicity. */
    isPublic: Scalars['Boolean'];
};
/** Connection of Device */
export declare type AppEvents = {
    __typename?: 'appEvents';
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
    /** Page Information */
    pageInfo: PageInfo;
    /** Events */
    events: Array<Maybe<AppEvent>>;
};
/** This contains information that was sent by the webhook in the past. */
export declare type AppEvent = {
    __typename?: 'appEvent';
    /** Unique Identifier of webhook for webapp */
    id: Scalars['Int'];
    /** The date and time the webhook was sent. */
    createdAt: Scalars['String'];
    /** Type of event, */
    type: Scalars['String'];
    app: AppEventApp;
    payload: AppEventPayload;
};
export declare type AppEventApp = {
    __typename?: 'appEventApp';
    /** Unique Identifier of webapp */
    id: Scalars['ID'];
};
/** Contains any of the following objects. */
export declare type AppEventPayload = {
    __typename?: 'appEventPayload';
    user?: Maybe<User>;
    device?: Maybe<Device>;
};
/** Connection of operations. */
export declare type OperationsConnection = {
    __typename?: 'operationsConnection';
    /** Edges. */
    edges: Array<Maybe<OperationEdge>>;
};
/** operation edge */
export declare type OperationEdge = {
    __typename?: 'operationEdge';
    /** Cursor. */
    node?: Maybe<Operation>;
    /** Facility name. */
    facilityName?: Maybe<Scalars['String']>;
    /** The amount of devices that are going to be set. */
    amountExpectedDevices?: Maybe<Scalars['Int']>;
    /** The amount of devices that have already been set. */
    amountOperatedDevices?: Maybe<Scalars['Int']>;
    /** The amount of reports including both error and information. */
    amountReport?: Maybe<Scalars['Int']>;
    /** Indicates whether or not error occurred and its error level if any. NoPrombelm Error. */
    errorLevelReport?: Maybe<Scalars['String']>;
};
/** operation. */
export declare type Operation = {
    __typename?: 'operation';
    /** Unique identifier. */
    id: Scalars['ID'];
    /** Name of operation. */
    name: Scalars['String'];
    /** Facility ID which the operation targets at. */
    facilityId: Scalars['Int'];
    /** Criteria of completion. 0: written, 1: online. */
    completionLevel: Scalars['Int'];
    /** Evidence picture of completion is required if this param is true. */
    needPicEvidence: Scalars['Boolean'];
    /** Need to specify the exact device location if this param is true. */
    needLocationNote: Scalars['Boolean'];
    /** Time when the operation will be carried out. */
    dueDate?: Maybe<Scalars['Date']>;
    /** Token that is going to be inclued in the operation URL on Android APP. */
    operationKey: Scalars['String'];
    /** Time when the facility created at */
    createdAt: Scalars['Date'];
};
/** Connection of operation settings */
export declare type OperationSettingsConnection = {
    __typename?: 'operationSettingsConnection';
    /** Total count of operation settings edges */
    totalCount: Scalars['Int'];
    /** Edges. */
    edges: Array<Maybe<OperationSettingEdge>>;
};
/** Operation setting edge. */
export declare type OperationSettingEdge = {
    __typename?: 'operationSettingEdge';
    /** Cursor. */
    node?: Maybe<OperationSetting>;
    /** Operation result of the specific setting ID if any. */
    operationResult?: Maybe<OperationResultForOperationSetting>;
};
/** Operation setting */
export declare type OperationSetting = {
    __typename?: 'operationSetting';
    /** Unique identifier. */
    id: Scalars['ID'];
    /** Operation ID */
    operationId: Scalars['ID'];
    /** Indication ID. */
    indicationId: Scalars['String'];
    /** String representation of network config. Please see https://obniz.com/ja/doc/reference/obnizos-for-esp32/settings/setting-json */
    networkConfigs: Scalars['String'];
    /** App ID. This field will be null when app is not selected. */
    appId?: Maybe<Scalars['Int']>;
    /** String representation of app config object. Will be empty object when no app is selected. */
    appConfigs: Scalars['String'];
    /** When no description is set, this field will be an empty string. */
    description: Scalars['String'];
    /** 0: not operated yet, 1: in progress, 2: finished */
    status: Scalars['Int'];
};
/** Operation result. */
export declare type OperationResultForOperationSetting = {
    __typename?: 'operationResultForOperationSetting';
    /** Obniz Id. */
    obnizId?: Maybe<Scalars['Int']>;
    /** Time when operation setting has been written. */
    successfullyWrittenAt?: Maybe<Scalars['Date']>;
    /** Time when a device became online. */
    becomeOnlineAt?: Maybe<Scalars['Date']>;
    /** Url of evidence picture. */
    picUrl?: Maybe<Scalars['String']>;
    /** Note about where a device has been set. */
    locationNote?: Maybe<Scalars['String']>;
    /** Error code of operation failure. */
    typeError?: Maybe<Scalars['Int']>;
};
/** Connection of operation results. */
export declare type OperationResultsConnection = {
    __typename?: 'operationResultsConnection';
    /** Total count of operation results edges */
    totalCount: Scalars['Int'];
    /** Edges. */
    edges: Array<Maybe<OperationResultEdge>>;
};
/** Operation result edge. */
export declare type OperationResultEdge = {
    __typename?: 'operationResultEdge';
    /** Cursor */
    node?: Maybe<OperationResult>;
};
/** Operation result. */
export declare type OperationResult = {
    __typename?: 'operationResult';
    /** Unique identifier. */
    id: Scalars['ID'];
    /** Operation Setting Id. */
    operationSettingId: Scalars['ID'];
    /** Indication Id. */
    indicationId: Scalars['String'];
    /** Obniz Id. */
    obnizId?: Maybe<Scalars['Int']>;
    /** Time when operation setting has been written. */
    successfullyWrittenAt?: Maybe<Scalars['Date']>;
    /** Time when a device became online. */
    becomeOnlineAt?: Maybe<Scalars['Date']>;
    /** Url of evidence picture. */
    picUrl?: Maybe<Scalars['String']>;
    /** Note about where a device has been set. */
    locationNote?: Maybe<Scalars['String']>;
    /** Error code of operation failure. */
    typeError?: Maybe<Scalars['Int']>;
};
/** Token object. This contains token information */
export declare type Token = {
    __typename?: 'token';
    /** Token type. app_token / oauth / api_key */
    type: Scalars['String'];
    /** user permission. none / read / full  */
    user: Scalars['String'];
    /** device permission. none / read / full  */
    device: Scalars['String'];
    /** event permission. none / read / full  */
    event: Scalars['String'];
    /** facility permission. none / read / full  */
    facility: Scalars['String'];
    /** device_control permission. none / read / full  */
    device_control: Scalars['String'];
};
export declare type DeviceNoAuthRequired = {
    __typename?: 'deviceNoAuthRequired';
    /** Format is like XXXX-XXXX */
    id: Scalars['String'];
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type Mutation = {
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
    /** Create app log */
    createAppLog?: Maybe<AppLog>;
    /** Create app status */
    createAppStatus?: Maybe<AppStatus>;
    updateStatusOperationSetting?: Maybe<UpdateStatusOperationSettingResult>;
    createOperationResult?: Maybe<OperationResult>;
    removeOperationResult?: Maybe<RemoveOperationResultResponse>;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateEventArgs = {
    event: EventCreateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateEventArgs = {
    event: EventUpdateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationDeleteEventArgs = {
    id: Scalars['ID'];
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateDeviceArgs = {
    device: DeviceCreateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationRegistrateDeviceArgs = {
    device: DeviceRegistrateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateDeviceArgs = {
    device: DeviceUpdateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationGenerateDeviceAccessTokenArgs = {
    device: DeviceGenerateAccessTokenInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationDeleteDeviceAccessTokenArgs = {
    device: DeviceDeleteAccessTokenInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateDeviceSettingsForInstalledAppArgs = {
    edit: DeviceInstalledAppSettingsInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationInstallAppArgs = {
    install: AppInstallInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUninstallAppArgs = {
    uninstall: AppUninstallInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateAppLogArgs = {
    input: CreateAppLogInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateAppStatusArgs = {
    input: CreateAppStatusInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateStatusOperationSettingArgs = {
    operationSettingId: Scalars['ID'];
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateOperationResultArgs = {
    operationResult: CreateOperationResultInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationRemoveOperationResultArgs = {
    operationSettingId: Scalars['ID'];
};
export declare type EventCreateInput = {
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
export declare type EventUpdateInput = {
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
export declare type DeviceCreateInput = {
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
export declare type DeviceRegistrateInput = {
    /** It can be obtained from the QR Code on the device. */
    registrateUrl: Scalars['String'];
};
export declare type DeviceUpdateInput = {
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
    /** Online Check Interval in milli seconds. By default it is null and automatic interval under 1 minutes. */
    pingInterval?: Maybe<Scalars['Int']>;
};
export declare type DeviceGenerateAccessTokenInput = {
    obniz?: Maybe<DeviceGenerateAccessTokenInputDevice>;
};
export declare type DeviceGenerateAccessTokenInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
export declare type DeviceDeleteAccessTokenInput = {
    obniz?: Maybe<DeviceDeleteAccessTokenInputDevice>;
};
export declare type DeviceDeleteAccessTokenInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
export declare type DeviceInstalledAppSettingsInput = {
    obniz?: Maybe<DeviceInstalledAppSettingsInputDevice>;
    app?: Maybe<DeviceInstalledAppSettingsInputApp>;
};
export declare type DeviceInstalledAppSettingsInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type DeviceInstalledAppSettingsInputApp = {
    config: Array<AppConfigInput>;
};
export declare type AppConfigInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type AppInstallInput = {
    obniz: AppInstallInputDevice;
    app: AppInstallInputApp;
};
export declare type AppInstallInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type AppInstallInputApp = {
    /** appID */
    id: Scalars['ID'];
    config: Array<AppConfigInput>;
};
export declare type AppUninstallInput = {
    obniz?: Maybe<AppUninstallInputDevice>;
};
export declare type AppUninstallInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
export declare type CreateAppLogInput = {
    obniz: CreateAppLogInputDevice;
    app: CreateAppLogInputApp;
};
export declare type CreateAppLogInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type CreateAppLogInputApp = {
    /** The string must be json format and include a key 'message'. e.g. '{ 'message': 'log message' }' */
    logJson: Scalars['String'];
    /** log level: info or error */
    level: Scalars['String'];
};
/** App log */
export declare type AppLog = {
    __typename?: 'appLog';
    /** Unique ID */
    id: Scalars['ID'];
    /** obniz ID */
    obnizId: Scalars['ID'];
    /** The app log is targetted at an app having this ID */
    appId: Scalars['ID'];
    /** String representation of json including log information. */
    logJson: Scalars['String'];
    /** Log level of the app log. Possibilitties are either 'info' or 'error' */
    level: Scalars['String'];
    /** Created at */
    createdAt: Scalars['Date'];
};
export declare type CreateAppStatusInput = {
    obniz: CreateAppStatusInputDevice;
    result: CreateAppStatusInputApp;
};
export declare type CreateAppStatusInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type CreateAppStatusInputApp = {
    /** status */
    status: Scalars['String'];
    /** text */
    text: Scalars['String'];
};
/** App status */
export declare type AppStatus = {
    __typename?: 'appStatus';
    /** Unique ID */
    id: Scalars['ID'];
    /** obniz ID */
    obnizId: Scalars['ID'];
    result?: Maybe<AppStatusResult>;
    /** created at */
    createdAt?: Maybe<Scalars['Date']>;
};
export declare type AppStatusResult = {
    __typename?: 'appStatusResult';
    /** app status */
    status: Scalars['String'];
    /** text detailing the app status */
    text: Scalars['String'];
};
export declare type UpdateStatusOperationSettingResult = {
    __typename?: 'updateStatusOperationSettingResult';
    updated: Scalars['Boolean'];
};
export declare type CreateOperationResultInput = {
    /** Operation setting ID. */
    operationSettingId: Scalars['ID'];
    /** Obniz ID. Format can be both xxxx-xxxx and xxxxxxxx. */
    obnizId?: Maybe<Scalars['String']>;
    /** Time when a device setting is written onto an obniz. */
    successfullyWrittenAt?: Maybe<Scalars['Date']>;
    /** Time when an obniz became online. */
    becomeOnlineAt?: Maybe<Scalars['Date']>;
    /** Binary data of operation picture. */
    picBinary?: Maybe<Scalars['Upload']>;
    /** Location note. */
    locationNote?: Maybe<Scalars['String']>;
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
     */
    typeError: Scalars['Int'];
};
export declare type RemoveOperationResultResponse = {
    __typename?: 'removeOperationResultResponse';
    removed?: Maybe<Scalars['Boolean']>;
};
export declare type WebappQueryVariables = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
export declare type WebappQuery = ({
    __typename?: 'Query';
} & {
    webapp?: Maybe<({
        __typename?: 'webapp';
    } & Pick<Webapp, 'id' | 'title' | 'short_body' | 'type' | 'store_status'> & {
        installs?: Maybe<({
            __typename?: 'installConnection';
        } & Pick<InstallConnection, 'totalCount'> & {
            pageInfo: ({
                __typename?: 'pageInfo';
            } & PageInfoFieldsFragment);
            edges: Array<Maybe<({
                __typename?: 'installEdge';
            } & InstallEdgeFieldsFragment)>>;
        })>;
    })>;
});
export declare type AppQueryVariables = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
export declare type AppQuery = ({
    __typename?: 'Query';
} & {
    app?: Maybe<({
        __typename?: 'app';
    } & Pick<App, 'id' | 'title' | 'short_body' | 'type' | 'store_status'> & {
        installs?: Maybe<({
            __typename?: 'appInstallConnection';
        } & Pick<AppInstallConnection, 'totalCount'> & {
            pageInfo: ({
                __typename?: 'pageInfo';
            } & PageInfoFieldsFragment);
            edges: Array<Maybe<({
                __typename?: 'appInstallEdge';
            } & AppInstallEdgeFieldsFragment)>>;
        })>;
    })>;
});
export declare type UserQueryVariables = {};
export declare type UserQuery = ({
    __typename?: 'Query';
} & {
    user?: Maybe<({
        __typename?: 'user';
    } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>)>;
});
export declare type DevicesQueryVariables = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
    id?: Maybe<Scalars['String']>;
    hw?: Maybe<Scalars['String']>;
    app?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['String']>;
    serialCode?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
};
export declare type DevicesQuery = ({
    __typename?: 'Query';
} & {
    devices?: Maybe<({
        __typename?: 'deviceConnection';
    } & Pick<DeviceConnection, 'totalCount'> & {
        pageInfo: ({
            __typename?: 'pageInfo';
        } & PageInfoFieldsFragment);
        edges: Array<Maybe<({
            __typename?: 'deviceEdge';
        } & DeviceEdgeFieldsFragment)>>;
    })>;
});
export declare type EventsQueryVariables = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
export declare type EventsQuery = ({
    __typename?: 'Query';
} & {
    events?: Maybe<({
        __typename?: 'eventConnection';
    } & Pick<EventConnection, 'totalCount'> & {
        pageInfo: ({
            __typename?: 'pageInfo';
        } & PageInfoFieldsFragment);
        edges: Array<Maybe<({
            __typename?: 'eventEdge';
        } & EventEdgeFieldsFragment)>>;
    })>;
});
export declare type AppEventsQueryVariables = {
    first?: Maybe<Scalars['first']>;
    skip?: Maybe<Scalars['skip']>;
};
export declare type AppEventsQuery = ({
    __typename?: 'Query';
} & {
    appEvents?: Maybe<({
        __typename?: 'appEvents';
    } & Pick<AppEvents, 'totalCount'> & {
        pageInfo: ({
            __typename?: 'pageInfo';
        } & PageInfoFieldsFragment);
        events: Array<Maybe<({
            __typename?: 'appEvent';
        } & Pick<AppEvent, 'id' | 'createdAt' | 'type'> & {
            app: ({
                __typename?: 'appEventApp';
            } & Pick<AppEventApp, 'id'>);
            payload: ({
                __typename?: 'appEventPayload';
            } & {
                user?: Maybe<({
                    __typename?: 'user';
                } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>)>;
                device?: Maybe<({
                    __typename?: 'device';
                } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'> & {
                    user?: Maybe<({
                        __typename?: 'user';
                    } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>)>;
                })>;
            });
        })>>;
    })>;
});
export declare type RegistrateDeviceMutationVariables = {
    device: DeviceRegistrateInput;
};
export declare type RegistrateDeviceMutation = ({
    __typename?: 'Mutation';
} & {
    registrateDevice?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>)>;
});
export declare type InstallAppMutationVariables = {
    install: AppInstallInput;
};
export declare type InstallAppMutation = ({
    __typename?: 'Mutation';
} & {
    installApp?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>)>;
});
export declare type UpdateDeviceSettingsForInstalledAppMutationVariables = {
    updateDeviceSettingsForInstalledApp: DeviceInstalledAppSettingsInput;
};
export declare type UpdateDeviceSettingsForInstalledAppMutation = ({
    __typename?: 'Mutation';
} & {
    updateDeviceSettingsForInstalledApp?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'> & {
        user?: Maybe<({
            __typename?: 'user';
        } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'credit' | 'createdAt'>)>;
    })>;
});
export declare type UninstallAppMutationVariables = {
    uninstallApp: AppUninstallInput;
};
export declare type UninstallAppMutation = ({
    __typename?: 'Mutation';
} & {
    uninstallApp?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>)>;
});
export declare type GenerateDeviceAccessTokenMutationVariables = {
    generateDeviceAccessToken: DeviceGenerateAccessTokenInput;
};
export declare type GenerateDeviceAccessTokenMutation = ({
    __typename?: 'Mutation';
} & {
    generateDeviceAccessToken?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>)>;
});
export declare type DeleteDeviceAccessTokenMutationVariables = {
    deleteDeviceAccessToken: DeviceDeleteAccessTokenInput;
};
export declare type DeleteDeviceAccessTokenMutation = ({
    __typename?: 'Mutation';
} & {
    deleteDeviceAccessToken?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'>)>;
});
export declare type PageInfoFieldsFragment = ({
    __typename?: 'pageInfo';
} & Pick<PageInfo, 'hasPreviousPage' | 'hasNextPage'>);
export declare type InstallEdgeFieldsFragment = ({
    __typename?: 'installEdge';
} & {
    node?: Maybe<({
        __typename?: 'install';
    } & Pick<Install, 'id' | 'configs' | 'createdAt' | 'updatedAt'> & {
        user?: Maybe<({
            __typename?: 'user';
        } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'createdAt' | 'credit'>)>;
    })>;
});
export declare type AppInstallEdgeFieldsFragment = ({
    __typename?: 'appInstallEdge';
} & {
    node?: Maybe<({
        __typename?: 'installed_device';
    } & Pick<Installed_Device, 'id' | 'access_token' | 'description' | 'metadata' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'configs'> & {
        user?: Maybe<({
            __typename?: 'user';
        } & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'plan' | 'createdAt' | 'credit'>)>;
    })>;
});
export declare type DeviceEdgeFieldsFragment = ({
    __typename?: 'deviceEdge';
} & {
    node?: Maybe<({
        __typename?: 'device';
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt' | 'pingInterval'> & {
        deviceLiveInfo?: Maybe<({
            __typename?: 'deviceLiveInfo';
        } & DeviceLiveInfoFieldsFragment)>;
    })>;
});
export declare type DeviceLiveInfoFieldsFragment = ({
    __typename?: 'deviceLiveInfo';
} & Pick<DeviceLiveInfo, 'isOnline' | 'onlineAt' | 'offlineAt'> & {
    connectedNetwork?: Maybe<({
        __typename?: 'connectedNetwork';
    } & ConnectedNetworkFieldsFragment)>;
});
export declare type ConnectedNetworkFieldsFragment = ({
    __typename?: 'connectedNetwork';
} & Pick<ConnectedNetwork, 'online_at' | 'net' | 'local_ip' | 'global_ip'> & {
    wifi?: Maybe<({
        __typename?: 'wifi';
    } & WifiFieldsFragment)>;
    wifimesh?: Maybe<({
        __typename?: 'wifimesh';
    } & WifimeshFieldsFragment)>;
});
export declare type WifiFieldsFragment = ({
    __typename?: 'wifi';
} & Pick<Wifi, 'ssid' | 'macAddress' | 'rssi'>);
export declare type WifimeshFieldsFragment = ({
    __typename?: 'wifimesh';
} & Pick<Wifimesh, 'meshid' | 'parent_obniz_id' | 'root_obniz_id' | 'layer' | 'rssi'>);
export declare type EventEdgeFieldsFragment = ({
    __typename?: 'eventEdge';
} & {
    node?: Maybe<({
        __typename?: 'event';
    } & Pick<Event, 'id' | 'name' | 'trigger' | 'action' | 'webhookUri' | 'createdAt'>)>;
});
export declare const PageInfoFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const InstallEdgeFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const AppInstallEdgeFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const WifiFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const WifimeshFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const ConnectedNetworkFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const DeviceLiveInfoFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const DeviceEdgeFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const EventEdgeFieldsFragmentDoc: import("graphql").DocumentNode;
export declare const WebappDocument: import("graphql").DocumentNode;
export declare const AppDocument: import("graphql").DocumentNode;
export declare const UserDocument: import("graphql").DocumentNode;
export declare const DevicesDocument: import("graphql").DocumentNode;
export declare const EventsDocument: import("graphql").DocumentNode;
export declare const AppEventsDocument: import("graphql").DocumentNode;
export declare const RegistrateDeviceDocument: import("graphql").DocumentNode;
export declare const InstallAppDocument: import("graphql").DocumentNode;
export declare const UpdateDeviceSettingsForInstalledAppDocument: import("graphql").DocumentNode;
export declare const UninstallAppDocument: import("graphql").DocumentNode;
export declare const GenerateDeviceAccessTokenDocument: import("graphql").DocumentNode;
export declare const DeleteDeviceAccessTokenDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    webapp(variables?: WebappQueryVariables | undefined): Promise<WebappQuery>;
    app(variables?: AppQueryVariables | undefined): Promise<AppQuery>;
    user(variables?: UserQueryVariables | undefined): Promise<UserQuery>;
    devices(variables?: DevicesQueryVariables | undefined): Promise<DevicesQuery>;
    events(variables?: EventsQueryVariables | undefined): Promise<EventsQuery>;
    appEvents(variables?: AppEventsQueryVariables | undefined): Promise<AppEventsQuery>;
    registrateDevice(variables: RegistrateDeviceMutationVariables): Promise<RegistrateDeviceMutation>;
    installApp(variables: InstallAppMutationVariables): Promise<InstallAppMutation>;
    updateDeviceSettingsForInstalledApp(variables: UpdateDeviceSettingsForInstalledAppMutationVariables): Promise<UpdateDeviceSettingsForInstalledAppMutation>;
    uninstallApp(variables: UninstallAppMutationVariables): Promise<UninstallAppMutation>;
    generateDeviceAccessToken(variables: GenerateDeviceAccessTokenMutationVariables): Promise<GenerateDeviceAccessTokenMutation>;
    deleteDeviceAccessToken(variables: DeleteDeviceAccessTokenMutationVariables): Promise<DeleteDeviceAccessTokenMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
