import { TestBed } from '@angular/core/testing';

import { ViewpolicyService } from './viewpolicy.service';

describe('ViewpolicyService', () => {
  let service: ViewpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
