import {
  createReducer,
  on
} from "@ngrx/store";
import { Currency } from "../models/currency.model";
import * as CurrenciesActions from "./currencies.actions";

export interface CurrenciesState {
  currencies: Currency[];
  loading: boolean;
  selectedCurrencyId: number | null;
}

const initialState: CurrenciesState = {
  currencies: [],
  loading: false,
  selectedCurrencyId: null
};

export const currenciesReducer = createReducer(
  initialState,
  on(CurrenciesActions.loadManyCurrencies, (state) => ({
    ...state,
    loading: true
  })),
  on(CurrenciesActions.loadManyCurrenciesSuccess, (state, { currencies }) => ({
    ...state,
    currencies,
    loading: false
  })),
  on(CurrenciesActions.loadManyCurrenciesFailure, (state) => ({
    ...state,
    loading: false
  }))
);
