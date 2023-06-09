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
import { Currency } from "../../models/currency.model";
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

  public currencies$!: Observable<Currency[] | null>;

  public ngOnInit(): void {
    this.currenciesStoreService.loadManyCurrencies();
    this.currencies$ = this.currenciesStoreService.currencies$;
  }
}
