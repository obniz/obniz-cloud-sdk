export interface SdkOption {
    baseUrl?: string;
}
export declare function getSdk(token: string, options?: SdkOption): {
    webapp(variables?: import("./sdk").WebappQueryVariables | undefined): Promise<import("./sdk").WebappQuery>;
    app(variables?: import("./sdk").AppQueryVariables | undefined): Promise<import("./sdk").AppQuery>;
    user(variables?: import("./sdk").UserQueryVariables | undefined): Promise<import("./sdk").UserQuery>;
    devices(variables?: import("./sdk").DevicesQueryVariables | undefined): Promise<import("./sdk").DevicesQuery>;
    events(variables?: import("./sdk").EventsQueryVariables | undefined): Promise<import("./sdk").EventsQuery>;
    appEvents(variables?: import("./sdk").AppEventsQueryVariables | undefined): Promise<import("./sdk").AppEventsQuery>;
    registrateDevice(variables: import("./sdk").RegistrateDeviceMutationVariables): Promise<import("./sdk").RegistrateDeviceMutation>;
    installApp(variables: import("./sdk").InstallAppMutationVariables): Promise<import("./sdk").InstallAppMutation>;
    updateDeviceSettingsForInstalledApp(variables: import("./sdk").UpdateDeviceSettingsForInstalledAppMutationVariables): Promise<import("./sdk").UpdateDeviceSettingsForInstalledAppMutation>;
    uninstallApp(variables: import("./sdk").UninstallAppMutationVariables): Promise<import("./sdk").UninstallAppMutation>;
    generateDeviceAccessToken(variables: import("./sdk").GenerateDeviceAccessTokenMutationVariables): Promise<import("./sdk").GenerateDeviceAccessTokenMutation>;
    deleteDeviceAccessToken(variables: import("./sdk").DeleteDeviceAccessTokenMutationVariables): Promise<import("./sdk").DeleteDeviceAccessTokenMutation>;
};
