import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartmentsComponent } from './show-departments.component';

describe('ShowDepartmentsComponent', () => {
  let component: ShowDepartmentsComponent;
  let fixture: ComponentFixture<ShowDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
