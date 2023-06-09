import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  Currency,
  LoadManyCurrenciesParams
} from "../models/currency.model";
import * as CurrenciesActions from "../store/currencies.actions";
import * as currenciesSelectors from "../store/currencies.selectors";
import { CurrenciesFeatureState } from "../store/currencies.selectors";

@Injectable()
export class CurrenciesStoreService {
  constructor(private store: Store<CurrenciesFeatureState>) {
  }

  public currencies$: Observable<Currency[] | null> =
    this.store.select(currenciesSelectors.selectCurrencies);

  public loadManyCurrencies(params?: LoadManyCurrenciesParams): void {
    this.store.dispatch(CurrenciesActions.loadManyCurrencies({ params }));
  }
}
