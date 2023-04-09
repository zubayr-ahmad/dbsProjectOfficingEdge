import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

// Extras
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [LoginFormComponent, ForgetPasswordComponent, ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgxIntlTelInputModule],
  exports: [LoginFormComponent, ForgetPasswordComponent],
})
export class LoginSystemModule { }
