import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ConvertCurrencyParams } from "../models/currency.model";
import * as CurrenciesActions from "../store/currencies.actions";
import * as currenciesSelectors from "../store/currencies.selectors";
import { CurrenciesFeatureState } from "../store/currencies.selectors";

@Injectable()
export class CurrenciesStoreService {
  constructor(private store: Store<CurrenciesFeatureState>) {
  }

  public symbols$: Observable<string[] | null> =
    this.store.select(currenciesSelectors.selectSymbols);
  public currency1Amount$: Observable<number | null> =
    this.store.select(currenciesSelectors.selectCurrency1Amount);
  public currency2Amount$: Observable<number | null> =
    this.store.select(currenciesSelectors.selectCurrency2Amount);

  public loadManyCurrencies(): void {
    this.store.dispatch(CurrenciesActions.loadManyCurrencies());
  }

  public convertCurrency(params: ConvertCurrencyParams): void {
    this.store.dispatch(CurrenciesActions.convertCurrency({ params }));
  }

  public setCurrency1Amount(currency1Amount: number): void {
    this.store.dispatch(CurrenciesActions.setCurrency1Amount({ currency1Amount }));
  }

  public setCurrency2Amount(currency2Amount: number): void {
    this.store.dispatch(CurrenciesActions.setCurrency2Amount({ currency2Amount }));
  }
}
