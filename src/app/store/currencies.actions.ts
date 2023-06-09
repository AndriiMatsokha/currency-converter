import { HttpErrorResponse } from "@angular/common/http";
import {
  createAction,
  props
} from "@ngrx/store";
import {
  Currency,
  LoadManyCurrenciesParams
} from "../models/currency.model";

export const loadManyCurrencies = createAction(
  "[Currencies] Load Many Currencies",
  props<{ params?: LoadManyCurrenciesParams }>()
);

export const loadManyCurrenciesSuccess = createAction(
  "[Currencies] Load Many Currencies Success",
  props<{ currencies: Currency[] }>()
);

export const loadManyCurrenciesFailure = createAction(
  "[Currencies] Load Many Currencies Failure",
  props<{ error: HttpErrorResponse }>()
);

