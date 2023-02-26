import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EmployeesState} from "../_reducers/employees.reducer";

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

// Employee selectors
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

// Auxiliary employee data
export const allSexes = createSelector(
  selectEmployeesState,
  state => state.dataSource.sex
);
export const allCountries = createSelector(
  selectEmployeesState,
  state => state.dataSource.country
);
export const allLanguages = createSelector(
  selectEmployeesState,
  state => state.dataSource.language
);
export const isDataSourceLoaded = createSelector(
  selectEmployeesState,
  state => state.isDataSourceLoaded
);
export const dataSourceError = createSelector(
  selectEmployeesState,
  state => state.dataSourceError
);

