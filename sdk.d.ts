import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
export declare type App = {
    __typename?: 'app';
    /** Unique Identifier of app */
    id: Scalars['ID'];
    /** Query Installs for an App. */
    installs?: Maybe<AppInstallConnection>;
    /** English Description */
    short_body: Scalars['String'];
    /** Current Status on app store */
    store_status: Scalars['String'];
    /** English Title of app */
    title: Scalars['String'];
    /** Type of app. */
    type: Scalars['String'];
};
/** App object. This contains app information which created on obniz.com as App */
export declare type AppInstallsArgs = {
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
};
export declare type AppConfigInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};
/** This contains information that was sent by the webhook in the past. */
export declare type AppEvent = {
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
export declare type AppEventApp = {
    __typename?: 'appEventApp';
    /** Unique Identifier of webapp */
    id: Scalars['ID'];
};
/** Contains any of the following objects. */
export declare type AppEventPayload = {
    __typename?: 'appEventPayload';
    device?: Maybe<Device>;
    user?: Maybe<User>;
};
/** Connection of Device */
export declare type AppEvents = {
    __typename?: 'appEvents';
    /** Events */
    events: Array<Maybe<AppEvent>>;
    /** Page Information */
    pageInfo: PageInfo;
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
};
/** Connection of Install */
export declare type AppInstallConnection = {
    __typename?: 'appInstallConnection';
    /** Edges */
    edges: Array<Maybe<AppInstallEdge>>;
    /** Page Information */
    pageInfo: PageInfo;
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
};
/** Install Edge */
export declare type AppInstallEdge = {
    __typename?: 'appInstallEdge';
    /** Cursor */
    node?: Maybe<Installed_Device>;
};
export declare type AppInstallInput = {
    app: AppInstallInputApp;
    obniz: AppInstallInputDevice;
};
export declare type AppInstallInputApp = {
    config: Array<AppConfigInput>;
    /** appID */
    id: Scalars['ID'];
};
export declare type AppInstallInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
/** App log */
export declare type AppLog = {
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
export declare type AppLogList = {
    /** log level: info or error */
    level: Scalars['String'];
    /** The string must be json format and include a key 'message'. e.g. '{ 'message': 'log message' }' */
    logJson: Scalars['String'];
    /** Cassandra timeuuid string. If the value is omitted, a time when the API is called is used as a timestamp. */
    timeuuid: Scalars['String'];
};
export declare type AppRelatedDataOfCreateAppLogsInput = {
    logs: Array<InputMaybe<AppLogList>>;
};
/** App status */
export declare type AppStatus = {
    __typename?: 'appStatus';
    /** created at */
    createdAt?: Maybe<Scalars['Date']>;
    /** Unique ID */
    id: Scalars['ID'];
    /** obniz ID */
    obnizId: Scalars['ID'];
    result?: Maybe<AppStatusResult>;
};
export declare type AppStatusResult = {
    __typename?: 'appStatusResult';
    /** app status */
    status: Scalars['String'];
    /** text detailing the app status */
    text: Scalars['String'];
};
export declare type AppUninstallInput = {
    obniz?: InputMaybe<AppUninstallInputDevice>;
};
export declare type AppUninstallInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
/** Information of currently connected cellullar network */
export declare type Cellular = {
    __typename?: 'cellular';
    /** CNUM: Phone Number */
    cnum?: Maybe<Scalars['String']>;
    /** ICCID: Sim Card Identifier */
    iccid?: Maybe<Scalars['String']>;
    /** IMEI: Modem Identifier */
    imei?: Maybe<Scalars['String']>;
    /** IMSI: Mobile subscription identity */
    imsi?: Maybe<Scalars['String']>;
    /** Current RSSI for connected Network. RSSI is mesured only on connection timing. ex ) -40 */
    rssi?: Maybe<Scalars['Int']>;
};
/** Information of currently connected network  */
export declare type ConnectedNetwork = {
    __typename?: 'connectedNetwork';
    /** cellular information if network type is cellular */
    cellular?: Maybe<Cellular>;
    /** Global IP if exist. ex) 201.200.199.198 */
    global_ip?: Maybe<Scalars['String']>;
    /** Local IP If exist. ex) 192.168.0.100 */
    local_ip?: Maybe<Scalars['String']>;
    /** Current connected network type. Defined in setting json. ex) wirelesslan */
    net: Scalars['String'];
    /** The time device become online on the cloud */
    online_at: Scalars['Date'];
    /** Wi-Fi information if network type is wirelesslan */
    wifi?: Maybe<Wifi>;
    /** Wi-Fi Mesh information if network type is wifimesh */
    wifimesh?: Maybe<Wifimesh>;
};
export declare type CreateAppLogInput = {
    app: CreateAppLogInputApp;
    obniz: CreateAppLogInputDevice;
};
export declare type CreateAppLogInputApp = {
    /** log level: info or error */
    level: Scalars['String'];
    /** The string must be json format and include a key 'message'. e.g. '{ 'message': 'log message' }' */
    logJson: Scalars['String'];
};
export declare type CreateAppLogInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type CreateAppLogsInput = {
    app: AppRelatedDataOfCreateAppLogsInput;
    obniz: ObnizRelatedDataOfCreateAppLogsInput;
};
export declare type CreateAppStatusInput = {
    obniz: CreateAppStatusInputDevice;
    result: CreateAppStatusInputApp;
};
export declare type CreateAppStatusInputApp = {
    /** status */
    status: Scalars['String'];
    /** text */
    text: Scalars['String'];
};
export declare type CreateAppStatusInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
export declare type CreateOperationResultInput = {
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
export declare type Device = {
    __typename?: 'device';
    /** Access Token */
    access_token?: Maybe<Scalars['String']>;
    /** JSON Representation of Installed app configration */
    configs: Scalars['String'];
    /** The time of device manufactured */
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
     *       'blelte_gw2': obniz BLE/LTE Gateway (Cat.4)
     *       'blewifi_gw2': obniz BLE/Wi-Fi Gateway Gen2.0
     *
     */
    hardware: Scalars['String'];
    /** Unique Identifier like "0000-0000" */
    id: Scalars['ID'];
    /** IMSI of LTE device. This will be recognized when LTE device was connected at least onece. */
    imsi?: Maybe<Scalars['String']>;
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
     *       'blewifi_gw2': obnizOS for obniz BLE/Wi-Fi Gateway Gen2.0
     *       'blelte_gw2': obnizOS for obniz BLE/LTE Gateway (Cat.4)
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
    /** The time of device registration to an account */
    registeredAt?: Maybe<Scalars['Date']>;
    /** Device SerialCode */
    serialCode?: Maybe<SerialCode>;
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
    /** Webhook event Destination URL. If not exist, then webhookUrl of the account will be used. */
    webhookUrl?: Maybe<Scalars['String']>;
};
/** Connection of Device */
export declare type DeviceConnection = {
    __typename?: 'deviceConnection';
    /** Edges */
    edges: Array<Maybe<DeviceEdge>>;
    /** Page Information */
    pageInfo: PageInfo;
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
};
export declare type DeviceCreateInput = {
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
export declare type DeviceDeleteAccessTokenInput = {
    obniz?: InputMaybe<DeviceDeleteAccessTokenInputDevice>;
};
export declare type DeviceDeleteAccessTokenInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
/** Device Edge */
export declare type DeviceEdge = {
    __typename?: 'deviceEdge';
    /** Cursor */
    node?: Maybe<Device>;
};
export declare type DeviceGenerateAccessTokenInput = {
    obniz?: InputMaybe<DeviceGenerateAccessTokenInputDevice>;
};
export declare type DeviceGenerateAccessTokenInputDevice = {
    /** obnizID */
    id: Scalars['String'];
};
export declare type DeviceInstalledAppSettingsInput = {
    app?: InputMaybe<DeviceInstalledAppSettingsInputApp>;
    obniz?: InputMaybe<DeviceInstalledAppSettingsInputDevice>;
};
export declare type DeviceInstalledAppSettingsInputApp = {
    config: Array<AppConfigInput>;
};
export declare type DeviceInstalledAppSettingsInputDevice = {
    /** obnizID */
    id: Scalars['ID'];
};
/** Device Live Information. */
export declare type DeviceLiveInfo = {
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
export declare type DeviceNoAuthRequired = {
    __typename?: 'deviceNoAuthRequired';
    /** Format is like XXXX-XXXX */
    id: Scalars['String'];
};
export declare type DeviceRegistrateInput = {
    /** It can be obtained from the QR Code on the device. */
    registrateUrl: Scalars['String'];
};
export declare type DeviceUpdateInput = {
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
    /** Detection period between going offline and alerting. (seconds) */
    offlineDetectDuration?: InputMaybe<Scalars['Int']>;
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
    /** URL to be notified when offline, starting with `http://` or `https://` or `mailto:`. */
    webhookUrl?: InputMaybe<Scalars['String']>;
};
/** ServerlessEvent */
export declare type Event = {
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
export declare type EventConnection = {
    __typename?: 'eventConnection';
    /** Edges */
    edges: Array<Maybe<EventEdge>>;
    /** Page Information */
    pageInfo: PageInfo;
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
};
export declare type EventCreateInput = {
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
export declare type EventEdge = {
    __typename?: 'eventEdge';
    /** Cursor */
    node?: Maybe<Event>;
};
export declare type EventUpdateInput = {
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
export declare type Hardware = {
    __typename?: 'hardware';
    /** Hardware Identifier  */
    hardware: Scalars['String'];
    /** OS identifier for hardware. */
    os: Scalars['String'];
};
/** Installed WebApp object. This contains user installed webapp configration */
export declare type Install = {
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
export declare type InstallConnection = {
    __typename?: 'installConnection';
    /** Edges */
    edges: Array<Maybe<InstallEdge>>;
    /** Page Information */
    pageInfo: PageInfo;
    /** Total Count of device edges */
    totalCount: Scalars['Int'];
};
/** Device information */
export declare type Installed_Device = {
    __typename?: 'installed_device';
    /** Access Token */
    access_token?: Maybe<Scalars['String']>;
    /** JSON Representation of Installed app configration */
    configs: Scalars['String'];
    /** The time of device manufactured */
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
     *       'blelte_gw2': obniz BLE/LTE Gateway (Cat.4)
     *       'blewifi_gw2': obniz BLE/Wi-Fi Gateway Gen2.0
     *
     */
    hardware: Scalars['String'];
    /** Unique Identifier like "0000-0000" */
    id: Scalars['ID'];
    /** IMSI of LTE device. This will be recognized when LTE device was connected at least onece. */
    imsi?: Maybe<Scalars['String']>;
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
     *       'blewifi_gw2': obnizOS for obniz BLE/Wi-Fi Gateway Gen2.0
     *       'blelte_gw2': obnizOS for obniz BLE/LTE Gateway (Cat.4)
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
    /** The time of device registration to an account */
    registeredAt?: Maybe<Scalars['Date']>;
    /** Device SerialCode */
    serialCode?: Maybe<SerialCode>;
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
    /** Webhook event Destination URL. If not exist, then webhookUrl of the account will be used. */
    webhookUrl?: Maybe<Scalars['String']>;
};
/** Install Edge */
export declare type InstallEdge = {
    __typename?: 'installEdge';
    /** Cursor */
    node?: Maybe<Install>;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type Mutation = {
    __typename?: 'Mutation';
    /**
     * Create app log
     * @deprecated We now provide more flexible createAppLogs API by which you can send multiple logs in a single request and also set timestamps too.
     */
    createAppLog?: Maybe<AppLog>;
    /** Create multiple app logs. */
    createAppLogs?: Maybe<Array<Maybe<AppLog>>>;
    /** Create app status */
    createAppStatus?: Maybe<AppStatus>;
    /** Create New Device */
    createDevice?: Maybe<Device>;
    /**
     * Create New Event
     * @deprecated This is legacy feature, no more maintained and will be thrown away in the near future.
     */
    createEvent?: Maybe<Event>;
    createOperationResult?: Maybe<OperationResult>;
    /** Delete Device Access Token */
    deleteDeviceAccessToken?: Maybe<Device>;
    /**
     * Delete Exist Event
     * @deprecated This is legacy feature, no more maintained and will be thrown away in the near future.
     */
    deleteEvent: Scalars['ID'];
    /** Generate Device Access Token */
    generateDeviceAccessToken?: Maybe<Device>;
    /** Install App To Device */
    installApp?: Maybe<Device>;
    /** Get device ownership with 'registrateUrl'. */
    registrateDevice?: Maybe<Device>;
    removeOperationResult?: Maybe<RemoveOperationResultResponse>;
    /** Uninstall the app from the device. */
    uninstallApp?: Maybe<Device>;
    /** Update Device */
    updateDevice?: Maybe<Device>;
    /** Update install settings of the device. */
    updateDeviceSettingsForInstalledApp?: Maybe<Device>;
    /**
     * Update Exist Event
     * @deprecated This is legacy feature, no more maintained and will be thrown away in the near future.
     */
    updateEvent?: Maybe<Event>;
    updateStatusOperationSetting?: Maybe<UpdateStatusOperationSettingResult>;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateAppLogArgs = {
    input: CreateAppLogInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateAppLogsArgs = {
    input: CreateAppLogsInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateAppStatusArgs = {
    input: CreateAppStatusInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateDeviceArgs = {
    device: DeviceCreateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateEventArgs = {
    event: EventCreateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationCreateOperationResultArgs = {
    operationResult: CreateOperationResultInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationDeleteDeviceAccessTokenArgs = {
    device: DeviceDeleteAccessTokenInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationDeleteEventArgs = {
    id: Scalars['ID'];
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationGenerateDeviceAccessTokenArgs = {
    device: DeviceGenerateAccessTokenInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationInstallAppArgs = {
    install: AppInstallInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationRegistrateDeviceArgs = {
    device: DeviceRegistrateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationRemoveOperationResultArgs = {
    operationSettingId: Scalars['ID'];
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUninstallAppArgs = {
    uninstall: AppUninstallInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateDeviceArgs = {
    device: DeviceUpdateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateDeviceSettingsForInstalledAppArgs = {
    edit: DeviceInstalledAppSettingsInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateEventArgs = {
    event: EventUpdateInput;
};
/** Root of api.obniz.com graphql api endpoint mutations */
export declare type MutationUpdateStatusOperationSettingArgs = {
    operationSettingId: Scalars['ID'];
};
export declare type ObnizRelatedDataOfCreateAppLogsInput = {
    /** obnizID */
    id: Scalars['ID'];
};
/** operation. */
export declare type Operation = {
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
export declare type OperationEdge = {
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
export declare type OperationResult = {
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
export declare type OperationResultEdge = {
    __typename?: 'operationResultEdge';
    /** Cursor */
    node?: Maybe<OperationResult>;
};
/** Operation result. */
export declare type OperationResultForOperationSetting = {
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
export declare type OperationResultsConnection = {
    __typename?: 'operationResultsConnection';
    /** Edges. */
    edges: Array<Maybe<OperationResultEdge>>;
    /** Total count of operation results edges */
    totalCount: Scalars['Int'];
};
/** Connection of operations. */
export declare type OperationsConnection = {
    __typename?: 'operationsConnection';
    /** Edges. */
    edges: Array<Maybe<OperationEdge>>;
};
/** Operation setting */
export declare type OperationSetting = {
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
    /** String representation of network config. Please see https://docs.obniz.com/ja/reference/obnizos-for-esp32/settings/setting-json */
    networkConfigs: Scalars['String'];
    /** Operation ID */
    operationId: Scalars['ID'];
    /** 0: not operated yet, 1: in progress, 2: finished */
    status: Scalars['Int'];
};
/** Operation setting edge. */
export declare type OperationSettingEdge = {
    __typename?: 'operationSettingEdge';
    /** Cursor. */
    node?: Maybe<OperationSetting>;
    /** Operation result of the specific setting ID if any. */
    operationResult?: Maybe<OperationResultForOperationSetting>;
};
/** Connection of operation settings */
export declare type OperationSettingsConnection = {
    __typename?: 'operationSettingsConnection';
    /** Edges. */
    edges: Array<Maybe<OperationSettingEdge>>;
    /** Total count of operation settings edges */
    totalCount: Scalars['Int'];
};
/** OS Information. Return value may different in user. */
export declare type Os = {
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
export declare type PageInfo = {
    __typename?: 'pageInfo';
    /** result has next page */
    hasNextPage: Scalars['Boolean'];
    /** result has previous page */
    hasPreviousPage: Scalars['Boolean'];
};
export declare type PipelineConfig = {
    __typename?: 'pipelineConfig';
    sensors: Array<Maybe<PipelineSensorConfig>>;
};
export declare type PipelineSensorConfig = {
    __typename?: 'pipelineSensorConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    uuid: Scalars['String'];
};
export declare type PipelineSensorLog = {
    __typename?: 'pipelineSensorLog';
    event: Scalars['String'];
    macAddress: Scalars['String'];
    sensor: Scalars['String'];
    timestamp: Scalars['Date'];
    uuid: Scalars['String'];
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type Query = {
    __typename?: 'Query';
    /** Information of app specified by given app token. */
    app?: Maybe<App>;
    /** Query event historys of Hosted App. */
    appEvents?: Maybe<AppEvents>;
    device?: Maybe<DeviceNoAuthRequired>;
    /** Information of obniz devices that the request user owns. */
    devices?: Maybe<DeviceConnection>;
    /**
     * User Configured Serverless Events
     * @deprecated This is legacy feature, no more maintained and will be thrown away in the near future.
     */
    events?: Maybe<EventConnection>;
    /** Registrated obniz hardware list on obniz Cloud */
    hardwares: Array<Maybe<Hardware>>;
    operationResults?: Maybe<OperationResultsConnection>;
    operations?: Maybe<OperationsConnection>;
    operationSettings?: Maybe<OperationSettingsConnection>;
    /** obnizOS versions on obniz Cloud for queried hardware */
    os: Array<Maybe<Os>>;
    pipelineConfig?: Maybe<PipelineConfig>;
    /** Get pipeline sensor logs for the specified obniz. */
    pipelineSensorLogs?: Maybe<Array<Maybe<PipelineSensorLog>>>;
    /** Token permission. */
    token?: Maybe<Token>;
    /** User information which is authorized for current Access Token. */
    user?: Maybe<User>;
    /**
     * Information of webapp specified by given app token.
     * @deprecated This is deprecated alias query for 'app' query. Use 'app' query instead.
     */
    webapp?: Maybe<Webapp>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryAppEventsArgs = {
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryDeviceArgs = {
    serialUrl?: InputMaybe<Scalars['String']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryDevicesArgs = {
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
export declare type QueryEventsArgs = {
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationResultsArgs = {
    first?: InputMaybe<Scalars['first']>;
    operationId?: InputMaybe<Scalars['ID']>;
    operationSettingId?: InputMaybe<Scalars['ID']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationsArgs = {
    facilityName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOperationSettingsArgs = {
    first?: InputMaybe<Scalars['first']>;
    operationId?: InputMaybe<Scalars['ID']>;
    status?: InputMaybe<Scalars['Int']>;
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryOsArgs = {
    hardware: Scalars['String'];
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryPipelineConfigArgs = {
    obnizId: Scalars['ID'];
};
/** Root of api.obniz.com graphql api endpoint queries */
export declare type QueryPipelineSensorLogsArgs = {
    limitForSensorLogs?: InputMaybe<Scalars['Int']>;
    obnizId: Scalars['ID'];
    targetSensorUuids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type RemoveOperationResultResponse = {
    __typename?: 'removeOperationResultResponse';
    removed?: Maybe<Scalars['Boolean']>;
};
/** Associated Serial Code */
export declare type SerialCode = {
    __typename?: 'serialCode';
    /** Associated serial code string */
    serialCode?: Maybe<Scalars['String']>;
};
/** Token object. This contains token information */
export declare type Token = {
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
export declare type UpdateStatusOperationSettingResult = {
    __typename?: 'updateStatusOperationSettingResult';
    updated: Scalars['Boolean'];
};
/** User information */
export declare type User = {
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
export declare type Webapp = {
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
export declare type WebappInstallsArgs = {
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
};
/** Information of currently connected wifi */
export declare type Wifi = {
    __typename?: 'wifi';
    /** Current connected Accespoint MacAddress. ex) 0123456789AB */
    macAddress?: Maybe<Scalars['String']>;
    /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
    rssi?: Maybe<Scalars['Int']>;
    /** Current connected Accespoint SSID. ex) obniz-wifi */
    ssid?: Maybe<Scalars['String']>;
};
/** Information of currently connected wifimesh */
export declare type Wifimesh = {
    __typename?: 'wifimesh';
    /** Depth of MESH network. layer=1 is root node of a network. ex ) 1 */
    layer?: Maybe<Scalars['Int']>;
    /** MESH ID of Currently joined MESH network. ex) 012345678901 */
    meshid?: Maybe<Scalars['String']>;
    /** Id of parent node ex) 0000-0000 */
    parent_obniz_id?: Maybe<Scalars['ID']>;
    /** Id of root node. Root is only connected to The AccessPoint ex) 0000-0000 */
    root_obniz_id?: Maybe<Scalars['ID']>;
    /** Current RSSI for connected Accesspoint. RSSI is mesured only on connection timing. ex ) -40 */
    rssi: Scalars['Int'];
};
export declare type WebappQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
}>;
export declare type WebappQuery = {
    __typename?: 'Query';
    webapp?: {
        __typename?: 'webapp';
        id: string;
        title: string;
        short_body: string;
        type: string;
        store_status: string;
        installs?: {
            __typename?: 'installConnection';
            totalCount: number;
            pageInfo: {
                __typename?: 'pageInfo';
                hasPreviousPage: boolean;
                hasNextPage: boolean;
            };
            edges: Array<{
                __typename?: 'installEdge';
                node?: {
                    __typename?: 'install';
                    id: string;
                    configs: string;
                    createdAt: any;
                    updatedAt: any;
                    user?: {
                        __typename?: 'user';
                        id: string;
                        name?: string | null;
                        email?: string | null;
                        picture?: string | null;
                        plan: string;
                        createdAt: any;
                        credit: string;
                    } | null;
                } | null;
            } | null>;
        } | null;
    } | null;
};
export declare type AppQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
}>;
export declare type AppQuery = {
    __typename?: 'Query';
    app?: {
        __typename?: 'app';
        id: string;
        title: string;
        short_body: string;
        type: string;
        store_status: string;
        installs?: {
            __typename?: 'appInstallConnection';
            totalCount: number;
            pageInfo: {
                __typename?: 'pageInfo';
                hasPreviousPage: boolean;
                hasNextPage: boolean;
            };
            edges: Array<{
                __typename?: 'appInstallEdge';
                node?: {
                    __typename?: 'installed_device';
                    id: string;
                    access_token?: string | null;
                    description: string;
                    metadata: string;
                    devicekey?: string | null;
                    hardware: string;
                    os: string;
                    osVersion: string;
                    region: string;
                    status: string;
                    createdAt: any;
                    configs: string;
                    user?: {
                        __typename?: 'user';
                        id: string;
                        name?: string | null;
                        email?: string | null;
                        picture?: string | null;
                        plan: string;
                        createdAt: any;
                        credit: string;
                    } | null;
                } | null;
            } | null>;
        } | null;
    } | null;
};
export declare type UserQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserQuery = {
    __typename?: 'Query';
    user?: {
        __typename?: 'user';
        id: string;
        name?: string | null;
        email?: string | null;
        picture?: string | null;
        plan: string;
        credit: string;
        createdAt: any;
    } | null;
};
export declare type DevicesQueryVariables = Exact<{
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
export declare type DevicesQuery = {
    __typename?: 'Query';
    devices?: {
        __typename?: 'deviceConnection';
        totalCount: number;
        pageInfo: {
            __typename?: 'pageInfo';
            hasPreviousPage: boolean;
            hasNextPage: boolean;
        };
        edges: Array<{
            __typename?: 'deviceEdge';
            node?: {
                __typename?: 'device';
                id: string;
                access_token?: string | null;
                description: string;
                devicekey?: string | null;
                hardware: string;
                os: string;
                osVersion: string;
                region: string;
                status: string;
                createdAt: any;
                pingInterval?: number | null;
                deviceLiveInfo?: {
                    __typename?: 'deviceLiveInfo';
                    isOnline: boolean;
                    onlineAt?: any | null;
                    offlineAt?: any | null;
                    connectedNetwork?: {
                        __typename?: 'connectedNetwork';
                        online_at: any;
                        net: string;
                        local_ip?: string | null;
                        global_ip?: string | null;
                        wifi?: {
                            __typename?: 'wifi';
                            ssid?: string | null;
                            macAddress?: string | null;
                            rssi?: number | null;
                        } | null;
                        wifimesh?: {
                            __typename?: 'wifimesh';
                            meshid?: string | null;
                            parent_obniz_id?: string | null;
                            root_obniz_id?: string | null;
                            layer?: number | null;
                            rssi: number;
                        } | null;
                        cellular?: {
                            __typename?: 'cellular';
                            cnum?: string | null;
                            iccid?: string | null;
                            imei?: string | null;
                            imsi?: string | null;
                            rssi?: number | null;
                        } | null;
                    } | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};
export declare type DeviceQueryVariables = Exact<{
    serialUrl?: InputMaybe<Scalars['String']>;
}>;
export declare type DeviceQuery = {
    __typename?: 'Query';
    device?: {
        __typename?: 'deviceNoAuthRequired';
        id: string;
    } | null;
};
export declare type EventsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
}>;
export declare type EventsQuery = {
    __typename?: 'Query';
    events?: {
        __typename?: 'eventConnection';
        totalCount: number;
        pageInfo: {
            __typename?: 'pageInfo';
            hasPreviousPage: boolean;
            hasNextPage: boolean;
        };
        edges: Array<{
            __typename?: 'eventEdge';
            node?: {
                __typename?: 'event';
                id: string;
                name: string;
                trigger: string;
                action: string;
                webhookUri?: string | null;
                createdAt: any;
            } | null;
        } | null>;
    } | null;
};
export declare type HardwaresQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type HardwaresQuery = {
    __typename?: 'Query';
    hardwares: Array<{
        __typename?: 'hardware';
        hardware: string;
        os: string;
    } | null>;
};
export declare type OsQueryVariables = Exact<{
    hardware: Scalars['String'];
}>;
export declare type OsQuery = {
    __typename?: 'Query';
    os: Array<{
        __typename?: 'os';
        version: string;
        app_url: string;
        bootloader_url: string;
        partition_url: string;
    } | null>;
};
export declare type AppEventsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    skip?: InputMaybe<Scalars['skip']>;
}>;
export declare type AppEventsQuery = {
    __typename?: 'Query';
    appEvents?: {
        __typename?: 'appEvents';
        totalCount: number;
        pageInfo: {
            __typename?: 'pageInfo';
            hasPreviousPage: boolean;
            hasNextPage: boolean;
        };
        events: Array<{
            __typename?: 'appEvent';
            id: number;
            createdAt: string;
            type: string;
            app: {
                __typename?: 'appEventApp';
                id: string;
            };
            payload: {
                __typename?: 'appEventPayload';
                user?: {
                    __typename?: 'user';
                    id: string;
                    name?: string | null;
                    email?: string | null;
                    picture?: string | null;
                    plan: string;
                    credit: string;
                    createdAt: any;
                } | null;
                device?: {
                    __typename?: 'device';
                    id: string;
                    access_token?: string | null;
                    description: string;
                    metadata: string;
                    devicekey?: string | null;
                    hardware: string;
                    os: string;
                    osVersion: string;
                    region: string;
                    status: string;
                    createdAt: any;
                    configs: string;
                    user?: {
                        __typename?: 'user';
                        id: string;
                        name?: string | null;
                        email?: string | null;
                        picture?: string | null;
                        plan: string;
                        credit: string;
                        createdAt: any;
                    } | null;
                } | null;
            };
        } | null>;
    } | null;
};
export declare type OperationsQueryVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    facilityName?: InputMaybe<Scalars['String']>;
}>;
export declare type OperationsQuery = {
    __typename?: 'Query';
    operations?: {
        __typename?: 'operationsConnection';
        edges: Array<{
            __typename?: 'operationEdge';
            facilityName?: string | null;
            amountExpectedDevices?: number | null;
            amountOperatedDevices?: number | null;
            amountReport?: number | null;
            errorLevelReport?: string | null;
            node?: {
                __typename?: 'operation';
                id: string;
                name: string;
                facilityId: number;
                completionLevel: number;
                needPicEvidence: boolean;
                needLocationNote: boolean;
                dueDate?: any | null;
                operationKey: string;
                createdAt: any;
            } | null;
        } | null>;
    } | null;
};
export declare type OperationSettingsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    operationId?: InputMaybe<Scalars['ID']>;
    status?: InputMaybe<Scalars['Int']>;
}>;
export declare type OperationSettingsQuery = {
    __typename?: 'Query';
    operationSettings?: {
        __typename?: 'operationSettingsConnection';
        totalCount: number;
        edges: Array<{
            __typename?: 'operationSettingEdge';
            node?: {
                __typename?: 'operationSetting';
                id: string;
                operationId: string;
                indicationId: string;
                networkConfigs: string;
                appId?: number | null;
                appConfigs: string;
                description: string;
                status: number;
            } | null;
            operationResult?: {
                __typename?: 'operationResultForOperationSetting';
                obnizId?: number | null;
                successfullyWrittenAt?: any | null;
                becomeOnlineAt?: any | null;
                picUrl?: string | null;
                locationNote?: string | null;
                typeError?: number | null;
            } | null;
        } | null>;
    } | null;
};
export declare type OperationResultsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['first']>;
    operationId?: InputMaybe<Scalars['ID']>;
    operationSettingId?: InputMaybe<Scalars['ID']>;
}>;
export declare type OperationResultsQuery = {
    __typename?: 'Query';
    operationResults?: {
        __typename?: 'operationResultsConnection';
        totalCount: number;
        edges: Array<{
            __typename?: 'operationResultEdge';
            node?: {
                __typename?: 'operationResult';
                id: string;
                operationSettingId: string;
                indicationId: string;
                obnizId?: number | null;
                successfullyWrittenAt?: any | null;
                becomeOnlineAt?: any | null;
                picUrl?: string | null;
                locationNote?: string | null;
                typeError?: number | null;
            } | null;
        } | null>;
    } | null;
};
export declare type TokenQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type TokenQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'token';
        type: string;
        user: string;
        device: string;
        event: string;
        facility: string;
        device_control: string;
    } | null;
};
export declare type CreateEventMutationVariables = Exact<{
    event: EventCreateInput;
}>;
export declare type CreateEventMutation = {
    __typename?: 'Mutation';
    createEvent?: {
        __typename?: 'event';
        id: string;
        name: string;
        trigger: string;
        action: string;
        webhookUri?: string | null;
        createdAt: any;
    } | null;
};
export declare type UpdateEventMutationVariables = Exact<{
    event: EventUpdateInput;
}>;
export declare type UpdateEventMutation = {
    __typename?: 'Mutation';
    updateEvent?: {
        __typename?: 'event';
        id: string;
        name: string;
        trigger: string;
        action: string;
        webhookUri?: string | null;
        createdAt: any;
    } | null;
};
export declare type DeleteEventMutationVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type DeleteEventMutation = {
    __typename?: 'Mutation';
    deleteEvent: string;
};
export declare type CreateDeviceMutationVariables = Exact<{
    device: DeviceCreateInput;
}>;
export declare type CreateDeviceMutation = {
    __typename?: 'Mutation';
    createDevice?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type RegistrateDeviceMutationVariables = Exact<{
    device: DeviceRegistrateInput;
}>;
export declare type RegistrateDeviceMutation = {
    __typename?: 'Mutation';
    registrateDevice?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type UpdateDeviceMutationVariables = Exact<{
    device: DeviceUpdateInput;
}>;
export declare type UpdateDeviceMutation = {
    __typename?: 'Mutation';
    updateDevice?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type InstallAppMutationVariables = Exact<{
    install: AppInstallInput;
}>;
export declare type InstallAppMutation = {
    __typename?: 'Mutation';
    installApp?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type UpdateDeviceSettingsForInstalledAppMutationVariables = Exact<{
    updateDeviceSettingsForInstalledApp: DeviceInstalledAppSettingsInput;
}>;
export declare type UpdateDeviceSettingsForInstalledAppMutation = {
    __typename?: 'Mutation';
    updateDeviceSettingsForInstalledApp?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type UninstallAppMutationVariables = Exact<{
    uninstallApp: AppUninstallInput;
}>;
export declare type UninstallAppMutation = {
    __typename?: 'Mutation';
    uninstallApp?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type GenerateDeviceAccessTokenMutationVariables = Exact<{
    generateDeviceAccessToken: DeviceGenerateAccessTokenInput;
}>;
export declare type GenerateDeviceAccessTokenMutation = {
    __typename?: 'Mutation';
    generateDeviceAccessToken?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type DeleteDeviceAccessTokenMutationVariables = Exact<{
    deleteDeviceAccessToken: DeviceDeleteAccessTokenInput;
}>;
export declare type DeleteDeviceAccessTokenMutation = {
    __typename?: 'Mutation';
    deleteDeviceAccessToken?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            credit: string;
            createdAt: any;
        } | null;
    } | null;
};
export declare type UpdateStatusOperationSettingMutationVariables = Exact<{
    operationSettingId: Scalars['ID'];
}>;
export declare type UpdateStatusOperationSettingMutation = {
    __typename?: 'Mutation';
    updateStatusOperationSetting?: {
        __typename?: 'updateStatusOperationSettingResult';
        updated: boolean;
    } | null;
};
export declare type CreateOperationResultMutationVariables = Exact<{
    operationResult: CreateOperationResultInput;
}>;
export declare type CreateOperationResultMutation = {
    __typename?: 'Mutation';
    createOperationResult?: {
        __typename?: 'operationResult';
        id: string;
        operationSettingId: string;
        indicationId: string;
        obnizId?: number | null;
        successfullyWrittenAt?: any | null;
        becomeOnlineAt?: any | null;
        picUrl?: string | null;
        locationNote?: string | null;
        typeError?: number | null;
    } | null;
};
export declare type RemoveOperationResultMutationVariables = Exact<{
    operationSettingId: Scalars['ID'];
}>;
export declare type RemoveOperationResultMutation = {
    __typename?: 'Mutation';
    removeOperationResult?: {
        __typename?: 'removeOperationResultResponse';
        removed?: boolean | null;
    } | null;
};
export declare type PageInfoFieldsFragment = {
    __typename?: 'pageInfo';
    hasPreviousPage: boolean;
    hasNextPage: boolean;
};
export declare type InstallEdgeFieldsFragment = {
    __typename?: 'installEdge';
    node?: {
        __typename?: 'install';
        id: string;
        configs: string;
        createdAt: any;
        updatedAt: any;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            createdAt: any;
            credit: string;
        } | null;
    } | null;
};
export declare type AppInstallEdgeFieldsFragment = {
    __typename?: 'appInstallEdge';
    node?: {
        __typename?: 'installed_device';
        id: string;
        access_token?: string | null;
        description: string;
        metadata: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        configs: string;
        user?: {
            __typename?: 'user';
            id: string;
            name?: string | null;
            email?: string | null;
            picture?: string | null;
            plan: string;
            createdAt: any;
            credit: string;
        } | null;
    } | null;
};
export declare type DeviceEdgeFieldsFragment = {
    __typename?: 'deviceEdge';
    node?: {
        __typename?: 'device';
        id: string;
        access_token?: string | null;
        description: string;
        devicekey?: string | null;
        hardware: string;
        os: string;
        osVersion: string;
        region: string;
        status: string;
        createdAt: any;
        pingInterval?: number | null;
        deviceLiveInfo?: {
            __typename?: 'deviceLiveInfo';
            isOnline: boolean;
            onlineAt?: any | null;
            offlineAt?: any | null;
            connectedNetwork?: {
                __typename?: 'connectedNetwork';
                online_at: any;
                net: string;
                local_ip?: string | null;
                global_ip?: string | null;
                wifi?: {
                    __typename?: 'wifi';
                    ssid?: string | null;
                    macAddress?: string | null;
                    rssi?: number | null;
                } | null;
                wifimesh?: {
                    __typename?: 'wifimesh';
                    meshid?: string | null;
                    parent_obniz_id?: string | null;
                    root_obniz_id?: string | null;
                    layer?: number | null;
                    rssi: number;
                } | null;
                cellular?: {
                    __typename?: 'cellular';
                    cnum?: string | null;
                    iccid?: string | null;
                    imei?: string | null;
                    imsi?: string | null;
                    rssi?: number | null;
                } | null;
            } | null;
        } | null;
    } | null;
};
export declare type DeviceLiveInfoFieldsFragment = {
    __typename?: 'deviceLiveInfo';
    isOnline: boolean;
    onlineAt?: any | null;
    offlineAt?: any | null;
    connectedNetwork?: {
        __typename?: 'connectedNetwork';
        online_at: any;
        net: string;
        local_ip?: string | null;
        global_ip?: string | null;
        wifi?: {
            __typename?: 'wifi';
            ssid?: string | null;
            macAddress?: string | null;
            rssi?: number | null;
        } | null;
        wifimesh?: {
            __typename?: 'wifimesh';
            meshid?: string | null;
            parent_obniz_id?: string | null;
            root_obniz_id?: string | null;
            layer?: number | null;
            rssi: number;
        } | null;
        cellular?: {
            __typename?: 'cellular';
            cnum?: string | null;
            iccid?: string | null;
            imei?: string | null;
            imsi?: string | null;
            rssi?: number | null;
        } | null;
    } | null;
};
export declare type ConnectedNetworkFieldsFragment = {
    __typename?: 'connectedNetwork';
    online_at: any;
    net: string;
    local_ip?: string | null;
    global_ip?: string | null;
    wifi?: {
        __typename?: 'wifi';
        ssid?: string | null;
        macAddress?: string | null;
        rssi?: number | null;
    } | null;
    wifimesh?: {
        __typename?: 'wifimesh';
        meshid?: string | null;
        parent_obniz_id?: string | null;
        root_obniz_id?: string | null;
        layer?: number | null;
        rssi: number;
    } | null;
    cellular?: {
        __typename?: 'cellular';
        cnum?: string | null;
        iccid?: string | null;
        imei?: string | null;
        imsi?: string | null;
        rssi?: number | null;
    } | null;
};
export declare type WifiFieldsFragment = {
    __typename?: 'wifi';
    ssid?: string | null;
    macAddress?: string | null;
    rssi?: number | null;
};
export declare type WifimeshFieldsFragment = {
    __typename?: 'wifimesh';
    meshid?: string | null;
    parent_obniz_id?: string | null;
    root_obniz_id?: string | null;
    layer?: number | null;
    rssi: number;
};
export declare type CellularFieldsFragment = {
    __typename?: 'cellular';
    cnum?: string | null;
    iccid?: string | null;
    imei?: string | null;
    imsi?: string | null;
    rssi?: number | null;
};
export declare type EventEdgeFieldsFragment = {
    __typename?: 'eventEdge';
    node?: {
        __typename?: 'event';
        id: string;
        name: string;
        trigger: string;
        action: string;
        webhookUri?: string | null;
        createdAt: any;
    } | null;
};
export declare const PageInfoFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const InstallEdgeFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const AppInstallEdgeFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const WifiFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const WifimeshFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CellularFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ConnectedNetworkFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const DeviceLiveInfoFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const DeviceEdgeFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const EventEdgeFieldsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const WebappDocument: import("graphql/language/ast").DocumentNode;
export declare const AppDocument: import("graphql/language/ast").DocumentNode;
export declare const UserDocument: import("graphql/language/ast").DocumentNode;
export declare const DevicesDocument: import("graphql/language/ast").DocumentNode;
export declare const DeviceDocument: import("graphql/language/ast").DocumentNode;
export declare const EventsDocument: import("graphql/language/ast").DocumentNode;
export declare const HardwaresDocument: import("graphql/language/ast").DocumentNode;
export declare const OsDocument: import("graphql/language/ast").DocumentNode;
export declare const AppEventsDocument: import("graphql/language/ast").DocumentNode;
export declare const OperationsDocument: import("graphql/language/ast").DocumentNode;
export declare const OperationSettingsDocument: import("graphql/language/ast").DocumentNode;
export declare const OperationResultsDocument: import("graphql/language/ast").DocumentNode;
export declare const TokenDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateEventDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateEventDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteEventDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateDeviceDocument: import("graphql/language/ast").DocumentNode;
export declare const RegistrateDeviceDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateDeviceDocument: import("graphql/language/ast").DocumentNode;
export declare const InstallAppDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateDeviceSettingsForInstalledAppDocument: import("graphql/language/ast").DocumentNode;
export declare const UninstallAppDocument: import("graphql/language/ast").DocumentNode;
export declare const GenerateDeviceAccessTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteDeviceAccessTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateStatusOperationSettingDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateOperationResultDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveOperationResultDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    webapp(variables?: Exact<{
        first?: any;
        skip?: any;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<WebappQuery>;
    app(variables?: Exact<{
        first?: any;
        skip?: any;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<AppQuery>;
    user(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery>;
    devices(variables?: Exact<{
        first?: any;
        skip?: any;
        id?: InputMaybe<string> | undefined;
        hw?: InputMaybe<string> | undefined;
        app?: InputMaybe<number> | undefined;
        status?: InputMaybe<string> | undefined;
        created?: InputMaybe<string> | undefined;
        serialCode?: InputMaybe<string> | undefined;
        sort?: InputMaybe<string> | undefined;
        order?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<DevicesQuery>;
    device(variables?: Exact<{
        serialUrl?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeviceQuery>;
    events(variables?: Exact<{
        first?: any;
        skip?: any;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery>;
    hardwares(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<HardwaresQuery>;
    os(variables: OsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OsQuery>;
    appEvents(variables?: Exact<{
        first?: any;
        skip?: any;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<AppEventsQuery>;
    operations(variables?: Exact<{
        id?: InputMaybe<number> | undefined;
        facilityName?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationsQuery>;
    operationSettings(variables?: Exact<{
        first?: any;
        operationId?: InputMaybe<string> | undefined;
        status?: InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationSettingsQuery>;
    operationResults(variables?: Exact<{
        first?: any;
        operationId?: InputMaybe<string> | undefined;
        operationSettingId?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<OperationResultsQuery>;
    token(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenQuery>;
    createEvent(variables: CreateEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEventMutation>;
    updateEvent(variables: UpdateEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEventMutation>;
    deleteEvent(variables: DeleteEventMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteEventMutation>;
    createDevice(variables: CreateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateDeviceMutation>;
    registrateDevice(variables: RegistrateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegistrateDeviceMutation>;
    updateDevice(variables: UpdateDeviceMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDeviceMutation>;
    installApp(variables: InstallAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InstallAppMutation>;
    updateDeviceSettingsForInstalledApp(variables: UpdateDeviceSettingsForInstalledAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateDeviceSettingsForInstalledAppMutation>;
    uninstallApp(variables: UninstallAppMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UninstallAppMutation>;
    generateDeviceAccessToken(variables: GenerateDeviceAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GenerateDeviceAccessTokenMutation>;
    deleteDeviceAccessToken(variables: DeleteDeviceAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteDeviceAccessTokenMutation>;
    updateStatusOperationSetting(variables: UpdateStatusOperationSettingMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateStatusOperationSettingMutation>;
    createOperationResult(variables: CreateOperationResultMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOperationResultMutation>;
    removeOperationResult(variables: RemoveOperationResultMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveOperationResultMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
