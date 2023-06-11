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
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(private currenciesStoreService: CurrenciesStoreService) {
  }

  public symbols$!: Observable<string[] | null>;
  public rates$!: Observable<any>;

  public ngOnInit(): void {
    this.symbols$ = this.currenciesStoreService.currenciesSymbols$;
    this.rates$ = this.currenciesStoreService.rates$;
  }

  public selectedCoursesCurrenciesChange(symbols: string[]) {
    this.currenciesStoreService.loadSelectedCurrenciesCourses(symbols);
  }
}
