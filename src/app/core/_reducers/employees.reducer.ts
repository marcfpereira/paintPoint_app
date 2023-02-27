import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Employee} from "../_models/employee.model";
import {EmployeesActions, EmployeesActionsTypes} from "../_actions/employeesActionsTypes";
import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {routerReducer} from '@ngrx/router-store';
import {Sex} from "../_models/sex.model";
import {Country} from "../_models/country.model";
import {Language} from "../_models/language.model";

// Creates the employees state for the store
export interface EmployeesState extends EntityState<Employee> {
    employees: Employee[],
    isEmployeesLoaded: boolean;
    error: Error;
    dataSource: { sex: Sex[], language: Language[], country: Country[] };
    isDataSourceLoaded: boolean;
    dataSourceError: Error;
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();
// Initialize the state
export const initialEmployeesState: EmployeesState = adapter.getInitialState({
    // Employees properties
    employees: [],
    isEmployeesLoaded: false,
    error: new Error(),
    dataSource: {sex: [], country: [], language: []},
    isDataSourceLoaded: false,
    dataSourceError: new Error()
})

export function employeesReducer(state = initialEmployeesState, action: EmployeesActions): EmployeesState {
    switch (action.type) {
        // Executed when all employees are loaded
        case EmployeesActionsTypes.EmployeesLoaded: {
            const employeesList: Employee[] = action.payload.employees;
            return {
                ...state,
                employees: employeesList,
                isEmployeesLoaded: true
            }
        }
        //  Executed when error is dispatched
        case EmployeesActionsTypes.EmployeesLoadFailure: {
            const errorObject: Error = action.payload.error;
            return {
                ...state,
                error: errorObject,
                isEmployeesLoaded: false
            }
        }
        // Executed when auxiliary data is loaded
        case EmployeesActionsTypes.EmployeesAuxDataLoaded: {
            const dataSource: { sex: Sex[], language: Language[], country: Country[] } = action.payload.data;
            return {
                ...state,
                dataSource: dataSource,
                isDataSourceLoaded: true
            }
        }
        // Executed when error is dispatched
        case EmployeesActionsTypes.EmployeesAuxDataFailure: {
            const errorObject: Error = action.payload.error;
            return {
                ...state,
                dataSourceError: errorObject,
                isDataSourceLoaded: false
            }
        }
        default:
            return state;
    }
}

export const reducers: ActionReducerMap<{}> = {router: routerReducer};
export const metaReducers: MetaReducer<{}>[] = [];
