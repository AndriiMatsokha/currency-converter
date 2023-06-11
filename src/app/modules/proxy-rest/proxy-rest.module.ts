import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule
} from "@angular/core";
import {
  ProxyConfig,
  REST_BASE_CONFIG
} from "./proxy.config";


@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ProxyRestModule {
  public static forRoot(config: Partial<ProxyConfig> = {}): ModuleWithProviders<ProxyRestModule> {
    return {
      ngModule: ProxyRestModule,
      providers: [
        {
          provide: REST_BASE_CONFIG,
          useValue: {
            publicGateway: config.restConfig?.publicGateway,
            production: config.restConfig?.production,
            access_key: config.restConfig?.access_key
          }
        }
      ]
    };
  }
}
