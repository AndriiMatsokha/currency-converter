import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { Observable } from "rxjs";
import { CurrenciesStoreService } from "../../services/currencies-store.service";

@Component({
  selector: "app-currencies",
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrenciesComponent implements OnInit {
  constructor(private currenciesStoreService: CurrenciesStoreService) {
  }

  public symbols$!: Observable<string[] | null>;
  public currency1Amount$!: Observable<number | null>;
  public currency2Amount$!: Observable<number | null>;
  public list1Symbol: string | null = null;
  public list2Symbol: string | null = null;

  public ngOnInit(): void {
    this.currenciesStoreService.loadManyCurrencies();
    this.symbols$ = this.currenciesStoreService.symbols$;
    this.currency1Amount$ = this.currenciesStoreService.currency1Amount$;
    this.currency2Amount$ = this.currenciesStoreService.currency2Amount$;
  }

  public setCurrency1Amount(from: string | null, to: string | null, amount: string | null): void {
    const currency1Amount = Number(amount);
    if (currency1Amount) {
      this.currenciesStoreService.setCurrency1Amount(currency1Amount);
      this.convertCurrency(from, to, amount);
    }
  }

  public setCurrency2Amount(from: string | null, to: string | null, amount: string | null): void {
    const currency2Amount = Number(amount);
    if (currency2Amount) {
      this.currenciesStoreService.setCurrency2Amount(currency2Amount);
      this.convertCurrency(from, to, amount);
    }
  }

  public convertCurrency(from: string | null, to: string | null, amount: string | null): void {
    if (from && to && amount) {
      this.currenciesStoreService.convertCurrency({ from, to, amount: Number(amount) });
    }
  }
}
