import { TestBed } from '@angular/core/testing';

import { ViewclaimsService } from './viewclaims.service';

describe('ViewclaimsService', () => {
  let service: ViewclaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewclaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
