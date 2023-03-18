import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [LoginFormComponent, ForgetPasswordComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
})
export class LoginSystemModule { }
