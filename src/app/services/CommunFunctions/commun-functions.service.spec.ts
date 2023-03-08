import { TestBed } from '@angular/core/testing';

import { CommunFunctionService } from './commun-functions.service';

describe('CommunFunctionsService', () => {
  let service: CommunFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
