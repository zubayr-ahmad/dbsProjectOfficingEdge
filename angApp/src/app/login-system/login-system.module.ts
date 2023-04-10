import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

// Extras
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { JwtHelperService,JwtModule  } from '@auth0/angular-jwt';

@NgModule({
  declarations: [LoginFormComponent, ForgetPasswordComponent, ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgxIntlTelInputModule,     JwtModule.forRoot({
    config: {
      tokenGetter: () => localStorage.getItem('access_token'),
      allowedDomains: ['https://officingedge.azurewebsites.net'],
      disallowedRoutes: [''],
    },
  }),],
  exports: [LoginFormComponent, ForgetPasswordComponent],
  providers: [JwtHelperService],
})
export class LoginSystemModule { }
