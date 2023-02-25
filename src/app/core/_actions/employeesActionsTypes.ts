import {Action} from '@ngrx/store';
import {Employee} from "../_models/employee.model";

export enum EmployeesActionsTypes {
  RequestEmployees = '[Employees] Request to load all employees',
  EmployeesLoaded = '[Employees] All employees are loaded successfully',
  EmployeesLoadFailure = '[Employees] Load employees failures'
}

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

export type EmployeesActions =
  RequestEmployees
  | EmployeesLoaded
  | EmployeesLoadFailure;
