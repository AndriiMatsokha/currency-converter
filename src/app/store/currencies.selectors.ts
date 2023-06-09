import { createSelector } from "@ngrx/store";
import { Currency } from "../models/currency.model";
import * as CurrenciesReducer from "./currencies.reducer";

export interface CurrenciesFeatureState {
  currencies: CurrenciesReducer.CurrenciesState;
}

export const selectCurrenciesState = (state: CurrenciesFeatureState): CurrenciesReducer.CurrenciesState => state.currencies;

export const selectCurrencies = createSelector(
  selectCurrenciesState,
  (state): Currency[] | null => state.currencies
);
