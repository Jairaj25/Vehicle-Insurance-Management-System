import { TestBed } from '@angular/core/testing';

import { AgentviewpolicyService } from './agentviewpolicy.service';

describe('AgentviewpolicyService', () => {
  let service: AgentviewpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentviewpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
