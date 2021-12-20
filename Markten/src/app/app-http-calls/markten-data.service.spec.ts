import { TestBed } from '@angular/core/testing';

import { MarktenDataService } from './markten-data.service';

describe('MarktenDataService', () => {
  let service: MarktenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarktenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
