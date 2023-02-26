import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {RequestEmployees} from "../../core/_actions/employeesActionsTypes";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor( protected store: Store) {
    this.store.dispatch(new RequestEmployees());
  }

}
