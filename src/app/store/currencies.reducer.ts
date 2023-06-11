import {
  createReducer,
  on
} from "@ngrx/store";
import { Currency } from "../models/currency.model";
import * as CurrenciesActions from "./currencies.actions";

export interface CurrenciesState {
  loading: boolean;
  currencies: Currency[];
  currency1Amount: number | null;
  currency2Amount: number | null;
}

const initialState: CurrenciesState = {
  loading: false,
  currencies: [],
  currency1Amount: null,
  currency2Amount: null
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
  })),
  on(CurrenciesActions.setCurrency1Amount, (state, { currency1Amount }) => ({
    ...state,
    currency1Amount
  })),
  on(CurrenciesActions.setCurrency2Amount, (state, { currency2Amount }) => ({
    ...state,
    currency2Amount
  })),
  on(CurrenciesActions.convertCurrency, (state) => ({
    ...state,
    loading: true
  })),
  on(CurrenciesActions.convertCurrencySuccess, (state, { response }) => {
    const newState = { ...state, loading: false };
    let convertResponse = null;
    if (state.currency1Amount === response?.query.amount) {
      convertResponse = {
        currency2Amount: response?.result
      };
    }
    if (state.currency2Amount === response?.query.amount) {
      convertResponse = {
        currency1Amount: response?.result
      };
    }

    return { ...newState, ...convertResponse };
  }),
  on(CurrenciesActions.convertCurrencyFailure, (state) => ({
    ...state,
    loading: false
  }))
);
