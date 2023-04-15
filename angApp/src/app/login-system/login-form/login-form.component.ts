import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError } from 'rxjs/operators';
import { of} from 'rxjs';

import { userLogin } from 'src/app/Interfaces/userLogin.interface';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup; // form name
  loginResponse:any;
  decodeToken:any;
  showInvalidUserText:boolean = false;
  loading:boolean = false;
  

  // Initiating login form, routing and login service
  constructor(private fb: FormBuilder,
    private router:Router,
    private _loginService:LoginService,
    private _jwtHelper: JwtHelperService
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
      this.loading = true
      let user:userLogin={
        userName:data.get('username')?.value,
        password:data.get('password')?.value,
      }
      this._loginService.getLoginResponse(user)
      .pipe(
        catchError((error: any) => {
          if (error.error.isSuccess === false) {
            this.loading = false
            this.showInvalidUserText = true;
            console.log('Login failed: ', error.error.errorMessage);
          } else {
            throwIfFalsy(() => error);
          }
          return of(null);
        })
      )
      .subscribe((response:any)=>{
        if (response.isSuccess===true){
          this.loading = true
          this.loginResponse = response
          this.decodeToken = this._jwtHelper.decodeToken(this.loginResponse.result.token)
          console.log(response)
          console.log(this.decodeToken)
          let userRole = this.decodeToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
          if (userRole ==="Admin"){
            console.log('Inside Admin')
            localStorage.setItem('acces_token',this.loginResponse.result.token)
            this.router.navigate(['/adminHome'])
          }
          else if(userRole ==="User"){
            console.log('Inside User')
            this.router.navigate(['/userHome'])
          }
          
        } 
        else{
          console.log('Invalid User')
          }

      }
      
      )
      
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
function throwIfFalsy(arg0: () => any) {
  throw new Error('Function not implemented.');
}

