import { TestBed } from '@angular/core/testing';

import { MarktDataService } from './markt-data.service';

describe('MarktDataService', () => {
  let service: MarktDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarktDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
