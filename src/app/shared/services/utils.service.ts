import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
/**
 * This service contains methods used by components
 * @author Marc Fernández Pereira
 * @version 1.0 Release version - Includes functions for the app-header/filter
 */
export class UtilsService {
    filterValue: BehaviorSubject<number | string> = new BehaviorSubject<number | string>('');

    /**
     * Set the filtered value in a behaviour subject attribute
     * @param value
     */
    setFilterValue(value: string | number) {
        this.filterValue.next(value);
    }

    /**
     * Cast to observable  and return the filtered value
     */
    getFilterValue(): Observable<number | string> {
        return this.filterValue.asObservable();
    }

}
