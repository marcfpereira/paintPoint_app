import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {EmployeesService} from "../_services/employees.service";
import {
  EmployeesActionsTypes,
  EmployeesLoaded,
  EmployeesLoadFailure,
  RequestEmployees
} from "../_actions/employeesActionsTypes";
import {select, Store} from "@ngrx/store";
import {isEmployeesLoaded} from "../_selectors/employees.selector";
import {catchError, EMPTY, filter, map, mergeMap, tap, withLatestFrom, switchMap} from "rxjs";

@Injectable()
export class EmployeesEffects {
  loadEmployees$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EmployeesActionsTypes.RequestEmployees),
        withLatestFrom(this.store.select(isEmployeesLoaded)),
        filter(([action, _isEmployeesLoaded]) => !_isEmployeesLoaded),
        mergeMap(([action, _isEmployeesLoaded]) => this.employeesService.getAllEmployees()),
        tap(_employees => {
          this.store.dispatch(new EmployeesLoaded({employees: _employees.population.person}))
        }, error => {
          this.store.dispatch(new EmployeesLoadFailure({error: error}))
        })
      )
    , {dispatch: false})


  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private store: Store
  ) {
  }
}
