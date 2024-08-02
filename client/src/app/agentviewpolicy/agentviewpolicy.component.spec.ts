import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentviewpolicyComponent } from './agentviewpolicy.component';

describe('AgentviewpolicyComponent', () => {
  let component: AgentviewpolicyComponent;
  let fixture: ComponentFixture<AgentviewpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentviewpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentviewpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
