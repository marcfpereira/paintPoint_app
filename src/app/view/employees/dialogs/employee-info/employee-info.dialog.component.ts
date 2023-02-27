import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Employee} from "../../../../core/_models/employee.model";

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.dialog.component.html',
  styleUrls: ['./employee-info.dialog.component.scss']
})
/**
 * This dialog component shows all employee information
 * @author Marc Fernández Pereira
 * @version 1.0 Release version
 */
export class EmployeeInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}

class DialogData  {
  employee:Employee
}
