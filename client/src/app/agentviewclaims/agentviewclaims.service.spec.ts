import { TestBed } from '@angular/core/testing';

import { AgentviewclaimsService } from './agentviewclaims.service';

describe('AgentviewclaimsService', () => {
  let service: AgentviewclaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentviewclaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
