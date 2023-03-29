import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { 
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      fathersOrHusbandName: [''],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      religion: ['', Validators.required],
      nationality: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      contacts: this.fb.group({
        mobileNo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        officialEmail: ['', [Validators.required, Validators.email]]
      }),
      identityCard: this.fb.group({
        cnicNumber: ['', Validators.required],
        cnicAttachment: ['', Validators.required],
        cnicExpiryDate: ['', Validators.required]
      }),
      role: this.fb.group({
        userDefinedCode: ['', Validators.required],
        joiningDate: ['', Validators.required],
        employmentType: ['', Validators.required],
        location: ['Lahore', Validators.required],
        department: ['', Validators.required],
        jobTitle: ['Intern Backend', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    
  }

  onFormSubmit(){
    this.router.navigate(['/userHome/userDashboard'])
    console.log('Form submitted')
  }

}
