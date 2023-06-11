import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Observable,
  of
} from "rxjs";
import {
  ConvertCurrencyParams,
  ConvertCurrencyResponse,
  LoadManyCurrenciesResponse,
  LoadSelectedCurrenciesCoursesResponse,
} from "../models/currency.model";
import { ProxyRestService } from "../modules/proxy-rest/proxy-rest.service";

@Injectable()
export class CurrenciesRestService {
  constructor(
    private httpProxy: ProxyRestService
  ) {
  }

  public loadManyCurrencies(): Observable<HttpResponse<LoadManyCurrenciesResponse>> {
    return of(new HttpResponse<LoadManyCurrenciesResponse>({
      body: {
        success: true,
        symbols: { UAH: "ukrainian hryvnia",  USD: "american dollar",  EUR: "euro" }
      }
    }));

    //this.httpProxy.get<LoadManyCurrenciesResponse>("symbols");
  }

  public convertCurrency(params: ConvertCurrencyParams): Observable<HttpResponse<ConvertCurrencyResponse>> {
    return of(new HttpResponse<ConvertCurrencyResponse>(
      {
        body: {
          success: true,
          query: {
            from: "UAH",
            to: "USD",
            amount: 60,
          },
          info: {
            timestamp: 0,
            rate: 0,
          },
          historical: "empty",
          date: new Date(),
          result: 2,
        }
      }
    ));

    //this.httpProxy.get<ConvertCurrencyResponse>("convert", { urlParameters: params });
  }

  public loadSelectedCurrenciesCourses(symbols: string[]): Observable<HttpResponse<LoadSelectedCurrenciesCoursesResponse>> {
    return of(new HttpResponse<LoadSelectedCurrenciesCoursesResponse>(
      {
        body: {
          success: true,
          timestamp: 0,
          base: "UAH",
          date: new Date(),
          rates: { UAH: 1, USD: 0.027, EUR: 0.025 }
        }
      }
    ))

    //this.httpProxy.get<LoadSelectedCurrenciesCoursesResponse>("latest", { urlParameters: { base: "UAH", symbols } });
    //this.httpProxy.get<LoadSelectedCurrenciesCoursesResponse>("latest", { urlParameters: symbols });
  }
}
