import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsideComponent } from './dashboard-aside.component';

describe('DashboardAsideComponent', () => {
  let component: DashboardAsideComponent;
  let fixture: ComponentFixture<DashboardAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
