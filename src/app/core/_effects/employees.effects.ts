import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EmployeesService} from "../_services/employees.service";
import {EmployeesActionsTypes, EmployeesLoaded, RequestEmployees} from "../_actions/employeesActionsTypes";
import {select, Store} from "@ngrx/store";
import {isEmployeesLoaded} from "../_selectors/employees.selector";
import {catchError, EMPTY, filter, map, mergeMap, tap, withLatestFrom} from "rxjs";

@Injectable()
export class EmployeesEffects {
  loadEmployees$ = createEffect(
    () => this.actions$.pipe(
      ofType<RequestEmployees>(EmployeesActionsTypes.RequestEmployees),
      // withLatestFrom(this.store.pipe(select(isEmployeesLoaded))),
      // filter(([action, _isEmployeesLoaded]) => !_isEmployeesLoaded),
      mergeMap(() => this.employeesService.getAllEmployees().pipe(
          map(employees => this.store.dispatch(new EmployeesLoaded({employees: employees})),
            catchError(() => EMPTY)
          )
        )
      )));

  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private store: Store
  ) {
  }
}
