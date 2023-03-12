import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCheckinComponent } from './dashboard-checkin.component';

describe('DashboardCheckinComponent', () => {
  let component: DashboardCheckinComponent;
  let fixture: ComponentFixture<DashboardCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
