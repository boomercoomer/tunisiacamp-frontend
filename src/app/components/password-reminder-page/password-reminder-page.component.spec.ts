import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordReminderPageComponent } from './password-reminder-page.component';

describe('PasswordReminderPageComponent', () => {
  let component: PasswordReminderPageComponent;
  let fixture: ComponentFixture<PasswordReminderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordReminderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordReminderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
