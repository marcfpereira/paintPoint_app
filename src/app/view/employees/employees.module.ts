import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from "./employees.component";
import {RouterModule} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import { EmployeeInfoDialogComponent } from './dialogs/employee-info/employee-info.dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PipesModule} from "../../shared/pipes/pipes.module";



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeInfoDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: EmployeesComponent
      }
    ]),
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    PipesModule
  ],
})
export class EmployeesModule { }
