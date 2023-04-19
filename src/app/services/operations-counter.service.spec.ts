import { TestBed } from '@angular/core/testing';

import { OperationsCounterService } from './operations-counter.service';

describe('OperationsCounterService', () => {
  let service: OperationsCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
