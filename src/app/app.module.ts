import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { CurrenciesComponent } from "./components/currencies/currencies.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProxyRestModule } from "./modules/proxy-rest/proxy-rest.module";
import { ProxyRestService } from "./modules/proxy-rest/proxy-rest.service";
import { CurrenciesRestService } from "./services/currencies-rest.service";
import { CurrenciesStoreService } from "./services/currencies-store.service";
import { CurrenciesEffects } from "./store/currencies.effects";
import { currenciesReducer } from "./store/currencies.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurrenciesComponent,
    BrowserAnimationsModule,
    HeaderComponent,
    ProxyRestModule.forRoot({
      restConfig: {
        publicGateway: environment.host,
        production: environment.production
      }
    }),
    StoreModule.forRoot({ currencies: currenciesReducer }),
    EffectsModule.forRoot([CurrenciesEffects])
  ],
  providers: [
    CurrenciesRestService,
    CurrenciesStoreService,
    ProxyRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
