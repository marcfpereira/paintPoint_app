import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Store} from "@ngrx/store";
import {allSexes} from "../../../core/_selectors/employees.selector";
import {Sex} from "../../../core/_models/sex.model";
import {Subscription} from "rxjs";

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform, OnDestroy {
  sexes: Sex[];
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store) {
    this.store.select(allSexes).subscribe(sexes=> this.sexes = sexes);
  }

  transform(value: string) {
    return this.sexes.find(sex => sex.key === value);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
