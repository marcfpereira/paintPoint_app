import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EmployeesState} from "../_reducers/employees.reducer";

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

export const allEmployees = createSelector(
  selectEmployeesState,
  state => state.employees
);
export const isEmployeesLoaded = createSelector(
  selectEmployeesState,
  state => state.isEmployeesLoaded
);
export const employeesError = createSelector(
  selectEmployeesState,
  state => state.error
);
