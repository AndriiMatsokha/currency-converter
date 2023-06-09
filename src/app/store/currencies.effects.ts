import {
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import { of } from "rxjs";
import {
  catchError,
  exhaustMap,
  map
} from "rxjs/operators";
import {
  ConvertCurrencyResponse,
  LoadManyCurrenciesResponse,
  LoadSelectedCurrenciesCoursesResponse
} from "../models/currency.model";
import { CurrenciesRestService } from "../services/currencies-rest.service";
import * as CurrenciesActions from "./currencies.actions";

@Injectable()
export class CurrenciesEffects {
  constructor(
    private actions$: Actions,
    private currenciesRestService: CurrenciesRestService
  ) {
  }

  public loadManyCurrencies$ = createEffect(() => this.actions$.pipe(
      ofType(CurrenciesActions.loadManyCurrencies),
      exhaustMap(() =>
        this.currenciesRestService.loadManyCurrencies().pipe(
          map((response: HttpResponse<LoadManyCurrenciesResponse>) =>
            CurrenciesActions.loadManyCurrenciesSuccess({
              currencies: response?.body?.symbols || []
            })
          ),
          catchError((error: HttpErrorResponse) => of(
            CurrenciesActions.loadManyCurrenciesFailure({ error })
          ))
        )
      )
    )
  );

  public convertCurrency$ = createEffect(() => this.actions$.pipe(
      ofType(CurrenciesActions.convertCurrency),
      exhaustMap(({ params }) =>
        this.currenciesRestService.convertCurrency(params).pipe(
          map((response: HttpResponse<ConvertCurrencyResponse>) =>
            CurrenciesActions.convertCurrencySuccess({
              response: response.body
            })
          ),
          catchError((error: HttpErrorResponse) => of(
            CurrenciesActions.convertCurrencyFailure({ error })
          ))
        )
      )
    )
  );

  public loadManyCourses$ = createEffect(() => this.actions$.pipe(
      ofType(CurrenciesActions.loadSelectedCurrenciesCourses),
      exhaustMap(({ symbols }) =>
        this.currenciesRestService.loadSelectedCurrenciesCourses(symbols).pipe(
          map((response: HttpResponse<LoadSelectedCurrenciesCoursesResponse>) =>
            CurrenciesActions.loadSelectedCurrenciesCoursesSuccess({
              rates: response?.body?.rates || []
            })
          ),
          catchError((error: HttpErrorResponse) => of(
            CurrenciesActions.loadSelectedCurrenciesCoursesFailure({ error })
          ))
        )
      )
    )
  );
}
