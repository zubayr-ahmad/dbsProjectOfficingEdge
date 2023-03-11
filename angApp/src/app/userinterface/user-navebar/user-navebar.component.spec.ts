import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavebarComponent } from './user-navebar.component';

describe('UserNavebarComponent', () => {
  let component: UserNavebarComponent;
  let fixture: ComponentFixture<UserNavebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
