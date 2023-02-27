import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee, GetEmployeesResponse} from "../_models/employee.model";
import {Observable} from "rxjs";
import {Sex} from "../_models/sex.model";
import {Country} from "../_models/country.model";
import {Language} from "../_models/language.model";

const EMPLOYEES_API_ENDPOINT = 'https://storage.googleapis.com/web-aktios/entrevista-tecnica/info-population.json';
const EMPLOYEES_AUX_DATA_API_ENDPOINT = 'https://storage.googleapis.com/web-aktios/entrevista-tecnica/datasource.json';

@Injectable({
  providedIn: "root"
})

/**
 * This service provides functions to load employees resources. It is used for ngRX.
 * @author Marc Fernández Pereira
 * @version 1.0 Release version
 */
export class EmployeesService {
  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Retrieve an employees list
   */
  getAllEmployees(): Observable<GetEmployeesResponse> {
    return this.http.get<GetEmployeesResponse>(EMPLOYEES_API_ENDPOINT);
  }

  /**
   * Retrieves all employees auxiliary data like sex, country, sex, ...
   */
  getAllAuxiliaryEmployeeData(): Observable<{ data: { sex: Sex[], country: Country[], language: Language[] } }> {
    return this.http.get<{ data: { sex: Sex[], country: Country[], language: Language[] } }>(EMPLOYEES_AUX_DATA_API_ENDPOINT)
  }
}
