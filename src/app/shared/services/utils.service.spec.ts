import {TestBed} from '@angular/core/testing';

import {UtilsService} from './utils.service';

describe('UtilsService', () => {
    let service: UtilsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('#getFilterValue should return should be an observable',
        (done: DoneFn)=> {
        service.setFilterValue('test_value');
        service.getFilterValue().subscribe(value =>{
            expect(value).toBe('test_value');
            done();
        })
        }
    );
});
