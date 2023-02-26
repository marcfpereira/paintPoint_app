import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../../../../core/_models/employee.model";

class DialogData  {
  employee:Employee
}

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.dialog.component.html',
  styleUrls: ['./employee-info.dialog.component.scss']
})
export class EmployeeInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
