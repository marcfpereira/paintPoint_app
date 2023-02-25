import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Employee} from "../_models/employee.model";
import {EmployeesActions, EmployeesActionsTypes} from "../_actions/employeesActionsTypes";

// Creates the employees state for the store
export interface EmployeesState extends EntityState<Employee[]> {
  employees: Employee[],
  isEmployeesLoaded: boolean;
  error: Error;
}

export const adapter: EntityAdapter<Employee[]> = createEntityAdapter<Employee[]>();
// Initialize the state
export const initialEmployeesState: EmployeesState = adapter.getInitialState({
  employees: [],
  isEmployeesLoaded: false,
  error: new Error() //todo ???
})

export function employeesReducer(state = initialEmployeesState, action: EmployeesActions): EmployeesState {
  switch (action.type) {
    case EmployeesActionsTypes.EmployeesLoaded: {
      const employeesList: Employee[] = action.payload.employees;
      return {
        ...state,
        employees: employeesList,
        isEmployeesLoaded: true
      }
    }
    case EmployeesActionsTypes.EmployeesLoadFailure: {
      const errorObject: Error = action.payload.error;
      return {
        ...state,
        error: errorObject,
        isEmployeesLoaded: false
      }
    }
    default:
      return state;
  }
}

