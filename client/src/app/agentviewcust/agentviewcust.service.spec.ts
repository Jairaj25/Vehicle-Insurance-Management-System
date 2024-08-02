import { TestBed } from '@angular/core/testing';

import { AgentviewcustService } from './agentviewcust.service';

describe('AgentviewcustService', () => {
  let service: AgentviewcustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentviewcustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
