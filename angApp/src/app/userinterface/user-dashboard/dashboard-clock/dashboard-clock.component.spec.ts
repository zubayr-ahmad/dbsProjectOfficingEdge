import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClockComponent } from './dashboard-clock.component';

describe('DashboardClockComponent', () => {
  let component: DashboardClockComponent;
  let fixture: ComponentFixture<DashboardClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
