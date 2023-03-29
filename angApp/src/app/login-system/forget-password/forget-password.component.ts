import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, Form } from '@angular/forms';
interface loginFormData{
  email:string;
  password:string;
}

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent {
  loginForm: FormGroup;
  

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
    })
  }
  checkUserVerification(data:FormGroup){
    console.log('Email: ',data.get('email')?.value,'Password: ',data.get('password')?.value)
  }

  // Show password feature
  passwordFieldType:string = "password";
  togglePasswordVisibility(){
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';   // Toggle password and text type
  }
}
