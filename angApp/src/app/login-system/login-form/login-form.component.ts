import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { userLogin } from 'src/app/Interfaces/userLogin.interface';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup; // form name

  // Initiating login form, routing and login service
  constructor(private fb: FormBuilder,
    private router:Router,
    private _loginService:LoginService,

    ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    
  }



  // API call function for user authentication
  checkUserVerification(data: FormGroup) {
    if (data.valid){
      let user:userLogin={
        userName:data.get('email')?.value,
        password:data.get('password')?.value,
      }
      this._loginService.getLoginResponse(user).subscribe((response)=>{
        console.log(response)
      }, error => {
        console.error(error);
      })
    }

    else{
      this.loginForm.markAllAsTouched()
    }

    // this.router.navigate(['/userHome'])

  }



  // Show password feature
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password'; // Toggle password and text type
  }



}
