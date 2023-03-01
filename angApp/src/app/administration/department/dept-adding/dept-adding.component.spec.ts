import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptAddingComponent } from './dept-adding.component';

describe('DeptAddingComponent', () => {
  let component: DeptAddingComponent;
  let fixture: ComponentFixture<DeptAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
