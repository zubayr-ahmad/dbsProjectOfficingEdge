import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  check: boolean = true;
  login_form: FormGroup;

  constructor(formbuilder: FormBuilder, private router: Router) {
    this.login_form = formbuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter();

  handleLogin() {
    // Do login logic here for handling login later. and when the login is successfull then run the following code.
    let loginSuccessful = true;
    if (loginSuccessful) {
      this.loginSuccess.emit(true);
    }
  }
  getResponse() {
    if (this.check) {
      this.router.navigate(['./admin']);
      this.check = false;
    } else {
      this.router.navigate(['./loginForm']);
      this.check = true;
    }
  }
  postData(form: any) {
    let data = {
      email: this.login_form.get('email')?.value,
      password: this.login_form.get('password')?.value,
    };
    console.log(this.login_form.get('email')?.value);
    console.log(this.login_form.get('password')?.value);

    return data;
  }

  movetouser(){
    this.router.navigate(['/userHome'])
  }

    // Show password feature
    passwordFieldType: string = 'password';
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'; // Toggle password and text type
    }
}
