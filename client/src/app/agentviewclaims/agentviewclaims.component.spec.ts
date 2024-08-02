import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentviewclaimsComponent } from './agentviewclaims.component';

describe('AgentviewclaimsComponent', () => {
  let component: AgentviewclaimsComponent;
  let fixture: ComponentFixture<AgentviewclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentviewclaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentviewclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
