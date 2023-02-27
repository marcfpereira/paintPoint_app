import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {RequestEmployees, RequestEmployeesAuxData} from "../../core/_actions/employeesActionsTypes";
import { Subscription} from "rxjs";
import {Employee} from "../../core/_models/employee.model";
import {allEmployees, isEmployeesLoaded} from "../../core/_selectors/employees.selector";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeInfoDialogComponent} from "./dialogs/employee-info/employee-info.dialog.component";
import {UtilsService} from "../../shared/services/utils.service";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
    providers: [DatePipe]
})
/**
 * This component provides functions for the employee type resource
 * @author Marc Fernández Pereira
 * @version 1.0 Release version
 */
export class EmployeesComponent implements OnInit, OnDestroy, AfterViewInit {
    subscriptions: Subscription = new Subscription();
    employees: Employee[];
    filteredEmployees: Employee[];
    isEmployeesLoaded$ = this.store.select(isEmployeesLoaded);
    pageEvent: PageEvent;

    constructor(
        protected store: Store,
        public dialog: MatDialog,
        private utilsService: UtilsService,
        private datePipe: DatePipe) {
    }

    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
     */
    ngOnInit() {
        // Load all employees from the store
        this.subscriptions.add(
            this.store.select(allEmployees).subscribe(employees => {
                this.employees = employees;
                this.filteredEmployees = employees;
            }));
        // Filter employees list by the input value entered in the searcher
        this.subscriptions.add(
            this.utilsService.getFilterValue().subscribe(value => {
                this.filteredEmployees = this.employees.filter((employee) => {
                    return employee.name.toLowerCase().includes(value.toString().toLowerCase())
                        || employee.surname.toLowerCase().includes(value.toString().toLowerCase())
                        || employee.surname2.toLowerCase().includes(value.toString().toLowerCase())
                        || employee.phone.toLowerCase().includes(value.toString().toLowerCase())
                        || this.datePipe.transform(employee.datebirthday, 'dd/MM/yyyy')?.toString().includes(value.toString().toLowerCase())
                        || this.datePipe.transform(employee.lastModification, 'dd/MM/yyyy HH:mm:ss')?.toString().includes(value.toString().toLowerCase())
                        || employee.id.toString().toLowerCase().includes(value.toString().toLowerCase());
                });
            })
        );
    }

    /**
     * A lifecycle hook that is called after Angular has fully initialized a component's vie
     */
    ngAfterViewInit() {
        // Retrieves the employees list
        this.store.dispatch(new RequestEmployees());
        // Retrieve the auxiliary data to build the employees view
        this.store.dispatch(new RequestEmployeesAuxData());
    }

    /**
     * A lifecycle hook that is called when a directive, pipe, or service is destroyed.
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    /**
     * Open a employee information modal
     * @param employee
     */
    showEmployeeInfo(employee: Employee) {
        this.dialog.open(EmployeeInfoDialogComponent, {
            data: {
                employee: employee
            },
        });
    }
}
