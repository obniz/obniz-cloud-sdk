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
    /** Installed time */
    createdAt: Scalars['Date'];
    /** User information which is authorized for current Access Token. */
    user?: Maybe<User>;
    /** JSON Representation of Installed app configration */
    configs: Scalars['String'];
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
    /** Installed time */
    createdAt: Scalars['Date'];
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
    obniz?: Maybe<AppInstallInputDevice>;
    app?: Maybe<AppInstallInputApp>;
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
    } & Pick<Device, 'id' | 'access_token' | 'description' | 'devicekey' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt'>)>;
});
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
