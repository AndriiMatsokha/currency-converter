import { createSelector } from "@ngrx/store";
import * as CurrenciesReducer from "./currencies.reducer";

export interface CurrenciesFeatureState {
  currencies: CurrenciesReducer.CurrenciesState;
}

export const selectCurrenciesState = (state: CurrenciesFeatureState): CurrenciesReducer.CurrenciesState => state.currencies;

export const selectCurrenciesSymbols = createSelector(
  selectCurrenciesState,
  (state): string[] | null => Object.keys(state.currencies)
);

export const selectCurrency1Amount = createSelector(
  selectCurrenciesState,
  (state): number | null => state.currency1Amount
);

export const selectCurrency2Amount = createSelector(
  selectCurrenciesState,
  (state): number | null => {console.log(state); return state.currency2Amount}
);

export const selectRates = createSelector(
  selectCurrenciesState,
  (state): any => state.rates
);

export const selectLoading = createSelector(
  selectCurrenciesState,
  (state): boolean => state.loading
);
