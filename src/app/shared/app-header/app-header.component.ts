import {Component} from '@angular/core';
import {UtilsService} from "../services/utils.service";
import {Store} from "@ngrx/store";
import {isEmployeesLoaded} from "../../core/_selectors/employees.selector";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
    isMenuCollapsed = true;
    filterValue: string = '';

    constructor(
        private utilsService: UtilsService,
        public router: Router) {
    }

    /**
     * Set the filter value within a service to get the value in other components out this scope
     * @param event
     */
    setFilterValue(event: any) {
        this.utilsService.setFilterValue(event);
    }
}
