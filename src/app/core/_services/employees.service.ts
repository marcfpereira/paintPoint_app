import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../_models/employee.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
const EMPLOYEES_API_ENDPOINT = '';

export class EmployeesService {
  constructor(
    private http: HttpClient
  ) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(EMPLOYEES_API_ENDPOINT);
  }
}
