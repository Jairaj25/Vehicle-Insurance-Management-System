import { TestBed } from '@angular/core/testing';

import { BuypolicyService } from './buypolicy.service';

describe('BuypolicyService', () => {
  let service: BuypolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuypolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
