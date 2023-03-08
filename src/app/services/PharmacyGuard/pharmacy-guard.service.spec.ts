import { TestBed } from '@angular/core/testing';

import { PharmacyGuardService } from './pharmacy-guard.service';

describe('PharmacyGuardService', () => {
  let service: PharmacyGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
