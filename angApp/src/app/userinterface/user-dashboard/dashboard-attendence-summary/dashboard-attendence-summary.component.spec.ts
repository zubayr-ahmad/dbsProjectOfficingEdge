import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAttendenceSummaryComponent } from './dashboard-attendence-summary.component';

describe('DashboardAttendenceSummaryComponent', () => {
  let component: DashboardAttendenceSummaryComponent;
  let fixture: ComponentFixture<DashboardAttendenceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAttendenceSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAttendenceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
