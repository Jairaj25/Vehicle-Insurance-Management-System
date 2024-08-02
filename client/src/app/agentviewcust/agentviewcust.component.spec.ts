import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentviewcustComponent } from './agentviewcust.component';

describe('AgentviewcustComponent', () => {
  let component: AgentviewcustComponent;
  let fixture: ComponentFixture<AgentviewcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentviewcustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentviewcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
