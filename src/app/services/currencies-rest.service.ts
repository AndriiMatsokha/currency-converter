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

    //Працює
    //this.httpProxy.get<LoadManyCurrenciesResponse>("symbols");
  }

  public convertCurrency(params: ConvertCurrencyParams): Observable<HttpResponse<ConvertCurrencyResponse>> {
    //Конвертація відбутися при введених любих from, to і amount1 = 60
    return of(new HttpResponse<ConvertCurrencyResponse>(
      {
        body: {
          success: true,
          query: {
            from: params.from,
            to: params.to,
            amount: params.amount,
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

    //Немає доступу на безкоштовній підписці
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

    //Немає доступу на безкоштовній підписці
    //this.httpProxy.get<LoadSelectedCurrenciesCoursesResponse>("latest", { urlParameters: { base: "UAH", symbols } });
    //Працює
    //this.httpProxy.get<LoadSelectedCurrenciesCoursesResponse>("latest", { urlParameters: symbols });
  }
}
