import { TestBed } from '@angular/core/testing';

import { PostProofService } from './post-proof.service';

describe('PostProofService', () => {
  let service: PostProofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostProofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
