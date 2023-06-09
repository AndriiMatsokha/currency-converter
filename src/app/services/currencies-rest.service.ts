import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Observable,
  of
} from "rxjs";
import {
  Currency,
  LoadManyCurrenciesParams
} from "../models/currency.model";
import { ProxyRestService } from "../modules/proxy-rest/proxy-rest.service";

@Injectable()
export class CurrenciesRestService {
  constructor(
    private httpProxy: ProxyRestService
  ) {
  }

  //TODO Replace mock with api call
  public loadMany(urlParameters?: LoadManyCurrenciesParams): Observable<HttpResponse<Currency[]>> {
    return of(new HttpResponse<Currency[]>({
        body: [
          { name: "1" }, { name: "2" }, { name: "3" }
        ]
      }
    ));
  }
}
