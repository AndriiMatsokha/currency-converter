import { InjectionToken } from "@angular/core";

export const REST_BASE_CONFIG = new InjectionToken<RestBaseConfig>("proxy.restBaseConfig");

export interface ProxyConfig {
  restConfig: RestBaseConfig;
}

export interface RestBaseConfig {
  production: boolean;
  publicGateway: string;
  access_key: string;
}
