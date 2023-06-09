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
import { Currency } from "../models/currency.model";
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
      exhaustMap(({ params }) =>
        this.currenciesRestService.loadMany({ ...params }).pipe(
          map((response: HttpResponse<Currency[]>) =>
            CurrenciesActions.loadManyCurrenciesSuccess({
              currencies: response.body || []
            })
          ),
          catchError((error: HttpErrorResponse) => of(
            CurrenciesActions.loadManyCurrenciesFailure({ error })
          ))
        )
      )
    )
  );
}
