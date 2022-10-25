import { TestBed } from '@angular/core/testing';

import { CardbService } from './cardb.service';

describe('CardbService', () => {
  let service: CardbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
