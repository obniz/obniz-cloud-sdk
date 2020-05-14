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
  /** [Int] Limitation of query results. range is 1..30 */
  first: any;
  /** [Int] offset of query results. range is 0<= */
  skip: any;
  /** ISO-8601 Format DateTime */
  Date: any;
};

/** Root of api.obniz.io graphql api endpoint queries */
export type Query = {
   __typename?: 'Query';
  /** My WebApp Configration on obniz.io regarding accessToken. */
  webapp?: Maybe<Webapp>;
  /** User information which is authorized for current Access Token. */
  user?: Maybe<User>;
  /** Devices a user has */
  devices?: Maybe<DeviceConnection>;
  /** User Configured Serverless Events */
  events?: Maybe<EventConnection>;
};


/** Root of api.obniz.io graphql api endpoint queries */
export type QueryDevicesArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


/** Root of api.obniz.io graphql api endpoint queries */
export type QueryEventsArgs = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};

/** WebApp object. This contains webapp information which created on obniz.io as WebApp */
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
  /** Current Status on obniz.io WebApp Store */
  store_status: Scalars['String'];
  /** Query Installed Apps for WebApp. */
  installs?: Maybe<InstallConnection>;
};


/** WebApp object. This contains webapp information which created on obniz.io as WebApp */
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
  /** Device information configured in Install */
  devicesInConfig: Array<Maybe<Device>>;
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
  /** User Plan on obniz.io */
  plan: Scalars['String'];
  /** Credit Point user has */
  credit: Scalars['String'];
  /** Installed time */
  createdAt: Scalars['Date'];
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
   *       User Defined Metadata. Useful for labeling device location or attached machine.
   */
  description: Scalars['String'];
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

/** Root of api.obniz.io graphql api endpoint mutations */
export type Mutation = {
   __typename?: 'Mutation';
  /** Create New Event */
  createEvent?: Maybe<Event>;
  /** Update Exist Event */
  updateEvent?: Maybe<Event>;
  /** Delete Exist Event */
  deleteEvent: Scalars['ID'];
};


/** Root of api.obniz.io graphql api endpoint mutations */
export type MutationCreateEventArgs = {
  event: EventCreateInput;
};


/** Root of api.obniz.io graphql api endpoint mutations */
export type MutationUpdateEventArgs = {
  event: EventUpdateInput;
};


/** Root of api.obniz.io graphql api endpoint mutations */
export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
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

export type WebappQueryVariables = {
  first?: Maybe<Scalars['first']>;
  skip?: Maybe<Scalars['skip']>;
};


export type WebappQuery = (
  { __typename?: 'Query' }
  & { webapp?: Maybe<(
    { __typename?: 'webapp' }
    & Pick<Webapp, 'id' | 'title'>
    & { installs?: Maybe<(
      { __typename?: 'installConnection' }
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
      & Pick<User, 'id' | 'name' | 'email' | 'picture' | 'createdAt' | 'credit'>
    )>, devicesInConfig: Array<Maybe<(
      { __typename?: 'device' }
      & Pick<Device, 'id' | 'access_token' | 'description' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt'>
    )>> }
  )> }
);

export type DeviceEdgeFieldsFragment = (
  { __typename?: 'deviceEdge' }
  & { node?: Maybe<(
    { __typename?: 'device' }
    & Pick<Device, 'id' | 'access_token' | 'description' | 'hardware' | 'os' | 'osVersion' | 'region' | 'status' | 'createdAt'>
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
      createdAt
      credit
    }
    devicesInConfig {
      id
      access_token
      description
      hardware
      os
      osVersion
      region
      status
      createdAt
    }
  }
}
    `;
export const DeviceEdgeFieldsFragmentDoc = gql`
    fragment deviceEdgeFields on deviceEdge {
  node {
    id
    access_token
    description
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
    installs(first: $first, skip: $skip) {
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

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    webapp(variables?: WebappQueryVariables): Promise<WebappQuery> {
      return withWrapper(() => client.request<WebappQuery>(print(WebappDocument), variables));
    },
    user(variables?: UserQueryVariables): Promise<UserQuery> {
      return withWrapper(() => client.request<UserQuery>(print(UserDocument), variables));
    },
    devices(variables?: DevicesQueryVariables): Promise<DevicesQuery> {
      return withWrapper(() => client.request<DevicesQuery>(print(DevicesDocument), variables));
    },
    events(variables?: EventsQueryVariables): Promise<EventsQuery> {
      return withWrapper(() => client.request<EventsQuery>(print(EventsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;