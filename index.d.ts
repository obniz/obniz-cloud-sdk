export interface SdkOption {
    baseUrl?: string;
}
export declare function getSdk(token: string, options?: SdkOption): {
    webapp(variables?: import("./sdk").WebappQueryVariables | undefined): Promise<import("./sdk").WebappQuery>;
    app(variables?: import("./sdk").AppQueryVariables | undefined): Promise<import("./sdk").AppQuery>;
    user(variables?: import("./sdk").UserQueryVariables | undefined): Promise<import("./sdk").UserQuery>;
    devices(variables?: import("./sdk").DevicesQueryVariables | undefined): Promise<import("./sdk").DevicesQuery>;
    events(variables?: import("./sdk").EventsQueryVariables | undefined): Promise<import("./sdk").EventsQuery>;
    hardwares(variables?: import("./sdk").HardwaresQueryVariables | undefined): Promise<import("./sdk").HardwaresQuery>;
    os(variables: import("./sdk").OsQueryVariables): Promise<import("./sdk").OsQuery>;
    appEvents(variables?: import("./sdk").AppEventsQueryVariables | undefined): Promise<import("./sdk").AppEventsQuery>;
    operations(variables?: import("./sdk").OperationsQueryVariables | undefined): Promise<import("./sdk").OperationsQuery>;
    operationSettings(variables?: import("./sdk").OperationSettingsQueryVariables | undefined): Promise<import("./sdk").OperationSettingsQuery>;
    operationResults(variables?: import("./sdk").OperationResultsQueryVariables | undefined): Promise<import("./sdk").OperationResultsQuery>;
    token(variables?: import("./sdk").TokenQueryVariables | undefined): Promise<import("./sdk").TokenQuery>;
    createEvent(variables: import("./sdk").CreateEventMutationVariables): Promise<import("./sdk").CreateEventMutation>;
    updateEvent(variables: import("./sdk").UpdateEventMutationVariables): Promise<import("./sdk").UpdateEventMutation>;
    deleteEvent(variables: import("./sdk").DeleteEventMutationVariables): Promise<import("./sdk").DeleteEventMutation>;
    createDevice(variables: import("./sdk").CreateDeviceMutationVariables): Promise<import("./sdk").CreateDeviceMutation>;
    registrateDevice(variables: import("./sdk").RegistrateDeviceMutationVariables): Promise<import("./sdk").RegistrateDeviceMutation>;
    updateDevice(variables: import("./sdk").UpdateDeviceMutationVariables): Promise<import("./sdk").UpdateDeviceMutation>;
    installApp(variables: import("./sdk").InstallAppMutationVariables): Promise<import("./sdk").InstallAppMutation>;
    updateDeviceSettingsForInstalledApp(variables: import("./sdk").UpdateDeviceSettingsForInstalledAppMutationVariables): Promise<import("./sdk").UpdateDeviceSettingsForInstalledAppMutation>;
    uninstallApp(variables: import("./sdk").UninstallAppMutationVariables): Promise<import("./sdk").UninstallAppMutation>;
    generateDeviceAccessToken(variables: import("./sdk").GenerateDeviceAccessTokenMutationVariables): Promise<import("./sdk").GenerateDeviceAccessTokenMutation>;
    deleteDeviceAccessToken(variables: import("./sdk").DeleteDeviceAccessTokenMutationVariables): Promise<import("./sdk").DeleteDeviceAccessTokenMutation>;
    updateStatusOperationSetting(variables: import("./sdk").UpdateStatusOperationSettingMutationVariables): Promise<import("./sdk").UpdateStatusOperationSettingMutation>;
    createOperationResult(variables: import("./sdk").CreateOperationResultMutationVariables): Promise<import("./sdk").CreateOperationResultMutation>;
    removeOperationResult(variables: import("./sdk").RemoveOperationResultMutationVariables): Promise<import("./sdk").RemoveOperationResultMutation>;
};
