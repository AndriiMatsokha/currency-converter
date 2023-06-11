import {
  Component,
  OnInit
} from "@angular/core";
import { CurrenciesStoreService } from "./services/currencies-store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private currenciesStoreService: CurrenciesStoreService) {
  }

  public ngOnInit(): void {
    this.currenciesStoreService.loadManyCurrencies();
  }
}
