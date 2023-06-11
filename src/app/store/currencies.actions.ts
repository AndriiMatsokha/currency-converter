import { HttpErrorResponse } from "@angular/common/http";
import {
  createAction,
  props
} from "@ngrx/store";
import {
  ConvertCurrencyParams,
  ConvertCurrencyResponse,
  Currency
} from "../models/currency.model";

export const loadManyCurrencies = createAction(
  "[Currencies] Load Many Currencies"
);

export const loadManyCurrenciesSuccess = createAction(
  "[Currencies] Load Many Currencies Success",
  props<{ currencies: Currency[] }>()
);

export const loadManyCurrenciesFailure = createAction(
  "[Currencies] Load Many Currencies Failure",
  props<{ error: HttpErrorResponse }>()
);

export const convertCurrency = createAction(
  "[Currencies] Convert Currency",
  props<{ params: ConvertCurrencyParams }>()
);

export const convertCurrencySuccess = createAction(
  "[Currencies] Convert Currency Success",
  props<{ response: ConvertCurrencyResponse | null }>()
);

export const convertCurrencyFailure = createAction(
  "[Currencies] Convert Currency Failure",
  props<{ error: HttpErrorResponse }>()
);

export const setCurrency1Amount = createAction(
  "[Currencies] Set Currency 1 Amount",
  props<{ currency1Amount: number }>()
);

export const setCurrency2Amount = createAction(
  "[Currencies] Set Currency 2 Amount",
  props<{ currency2Amount: number }>()
);
