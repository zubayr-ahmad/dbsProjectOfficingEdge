import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
})
export class LoginSystemModule { }
