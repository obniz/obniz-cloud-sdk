import { Sdk } from './sdk';
export interface SdkOption {
  baseUrl?: string;
}
export declare function getSdk(token: string, options?: SdkOption): Sdk;
