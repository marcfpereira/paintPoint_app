import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee, GetEmployeesResponse} from "../_models/employee.model";
import {Observable} from "rxjs";

const EMPLOYEES_API_ENDPOINT = 'https://storage.googleapis.com/web-aktios/entrevista-tecnica/info-population.json';

@Injectable({
  providedIn: "root"
})

export class EmployeesService {
  constructor(
    private http: HttpClient
  ) {
  }

  getAllEmployees(): Observable<GetEmployeesResponse> {
    return this.http.get<GetEmployeesResponse>(EMPLOYEES_API_ENDPOINT);
  }
}
