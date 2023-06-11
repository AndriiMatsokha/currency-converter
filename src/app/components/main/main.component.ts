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
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  constructor(private currenciesStoreService: CurrenciesStoreService) {
  }

  public symbols$!: Observable<string[] | null>;
  public currency1Amount$!: Observable<number | null>;
  public currency2Amount$!: Observable<number | null>;
  public loading$!: Observable<boolean>;
  public list1Symbol: string | null = null;
  public list2Symbol: string | null = null;

  public ngOnInit(): void {
    this.symbols$ = this.currenciesStoreService.currenciesSymbols$;
    this.currency1Amount$ = this.currenciesStoreService.currency1Amount$;
    this.currency2Amount$ = this.currenciesStoreService.currency2Amount$;
    this.loading$ = this.currenciesStoreService.loading$;
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
