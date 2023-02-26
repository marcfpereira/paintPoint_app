import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RequestEmployees, RequestEmployeesAuxData} from "../../core/_actions/employeesActionsTypes";
import {combineLatestAll, Subscription} from "rxjs";
import {Employee} from "../../core/_models/employee.model";
import {allEmployees, isEmployeesLoaded} from "../../core/_selectors/employees.selector";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeInfoDialogComponent} from "./dialogs/employee-info/employee-info.dialog.component";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy, AfterViewInit {
  subscriptions: Subscription = new Subscription();
  employees: Employee[];
  isEmployeesLoaded$ = this.store.select(isEmployeesLoaded);
  pageEvent: PageEvent;

  constructor(
    protected store: Store,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.store.select(allEmployees).subscribe(employees => {
        this.employees = employees;
      }));
  }

  ngAfterViewInit() {
    // Retrieves the employees list
    this.store.dispatch(new RequestEmployees());
    // Retrieve the auxiliary data to build the employees view
    this.store.dispatch(new RequestEmployeesAuxData());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  showEmployeeInfo(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeInfoDialogComponent, {
      data: {
        employee: employee
      },
    });
  }
}
