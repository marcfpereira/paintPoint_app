import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Store} from "@ngrx/store";
import {allCountries} from "../../../core/_selectors/employees.selector";
import {Country} from "../../../core/_models/country.model";
import {Subscription} from "rxjs";

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform, OnDestroy {
  countries: Country[];
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store) {
    this.store.select(allCountries).subscribe(countries=> this.countries = countries);
  }

  transform(value: number) {
    return this.countries.find(country => country.id === value);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
