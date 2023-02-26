import {Action} from '@ngrx/store';
import {Employee} from "../_models/employee.model";
import {Sex} from "../_models/sex.model";
import {Language} from "../_models/language.model";
import {Country} from "../_models/country.model";

export enum EmployeesActionsTypes {
  // Employees
  RequestEmployees = '[Employees] Request to load all employees',
  EmployeesLoaded = '[Employees] All employees are loaded successfully',
  EmployeesLoadFailure = '[Employees] Load employees failures',
  // Auxiliary employee information
  RequestEmployeesAuxData = '[Employees] Request to load auxiliary employees data',
  EmployeesAuxDataLoaded = '[Employees] All auxiliary employees data loaded',
  EmployeesAuxDataFailure = '[Employees] Load auxiliary employees data failures'
}

// Employees actions
export class RequestEmployees implements Action {
  readonly type = EmployeesActionsTypes.RequestEmployees;
}

export class EmployeesLoaded implements Action {
  readonly type = EmployeesActionsTypes.EmployeesLoaded;

  constructor(public payload: { employees: Employee[] }) {
  }
}

export class EmployeesLoadFailure implements Action {
  readonly type = EmployeesActionsTypes.EmployeesLoadFailure;

  constructor(public payload: { error: Error }) {
  }
}

// Employees auxiliary data

export class RequestEmployeesAuxData implements Action {
  readonly type = EmployeesActionsTypes.RequestEmployeesAuxData;
}

export class EmployeesAuxDataLoaded implements Action {
  readonly type = EmployeesActionsTypes.EmployeesAuxDataLoaded;

  constructor(public payload: { data: { sex: Sex[], language: Language[], country: Country[] } }) {
  }
}

export class EmployeesAuxDataFailure implements Action {
  readonly type = EmployeesActionsTypes.EmployeesAuxDataFailure;

  constructor(public payload: { error: Error }) {
  }
}

export type EmployeesActions =
  RequestEmployees
  | EmployeesLoaded
  | EmployeesLoadFailure
  | RequestEmployeesAuxData
  | EmployeesAuxDataLoaded
  | EmployeesAuxDataFailure;
