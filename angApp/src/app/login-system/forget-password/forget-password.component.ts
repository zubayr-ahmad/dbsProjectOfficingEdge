import { Component } from '@angular/core';
// import { CountryISO,SearchCountryField  } from 'ngx-intl-tel-input';
import { FormControl,FormGroup,Validators,FormBuilder, Form } from '@angular/forms';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
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
  empAdd: FormGroup;

  // CountryISO = CountryISO;
  // SearchCountryField= SearchCountryField;

  // fisrtName: string = '';
  // lastName: string = '';
  // email:string = '';
  // department_type: string = '';
  // empType: number = 1;
  // empRole: number = 1;

  constructor(
    private formbiulder: FormBuilder,
    private emp: EmployeesDataService
  ) {
    this.empAdd = formbiulder.group({
      firstName: new FormControl("",Validators.required),
      lastName: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email]),
      department: new FormControl(null,Validators.required),
      empType: new FormControl(null,Validators.required),
      empRole: new FormControl(null,Validators.required),
      shiftStartTime: new FormControl(null,Validators.required),
      shiftEndTime: new FormControl(null,Validators.required),
      phoneNo: new FormControl(null),
    });

  }

  phoneValidationError: string ='';
  
  onIntlTelInputObject(intlTelInputObject: any) {
    intlTelInputObject.setNumber('');
    intlTelInputObject.setCountry('');

    const self = this;
    intlTelInputObject.options.phoneValidation = function (number:any, country:any) {
      const isValidNumber = intlTelInputObject.isValidNumber();
      const numberLength = intlTelInputObject.getNumber().length;

      if (isValidNumber && numberLength >= 4 && numberLength <= 15) {
        self.phoneValidationError = '';
        console.log('function true working')
        return true;
        
      } else {
        self.phoneValidationError = 'Invalid phone number.';
        console.log('function false working')
        return false;
      }
    };
  }

  storeEmployee(formData: any){}
  // storeEmployee(formData: any): any {
  //   if (formData.valid) {
  //     let data = {
  //       fname: formData.get('firstName')?.value,
  //       lname: formData.get('lastName')?.value,
  //       email: formData.get('email')?.value,
  //       dept: formData.get('department')?.value,
  //       empType: formData.get('empType')?.value,
  //       empRole: formData.get('empRole')?.value,
  //       shiftStartTime: formData.get('shiftStartTime')?.value,
  //       shiftEndTime: formData.get('shiftEndTime')?.value,
  //       phoneNo: formData.get('phoneNo')?.value,
  //     };
  
  //     this.emp.registerEmployee(data).subscribe((result) => {
  //       console.log(result);
  //       alert('Individual is added to the system. Keep growing :)');
  //     });
  //   } else {
  //     // Mark all the controls as touched to show validation messages
  //     this.empAdd.markAllAsTouched();
  //   }

  // }

  depart: any[] = [
    { deptName: 'IT', deptValue: 1 },
    { deptName: 'Accounts', deptValue: 2 },
    { deptName: 'Adminisstration', deptValue: 3 },
    { deptName: 'Quality Assurance', deptValue: 4 },
  ];

  typeEmployee: any[] = [
    { typeName: 'part-time', typeValue: 1 },
    { typeName: 'full-time', typeValue: 2 },
    { typeName: 'seasonal', typeValue: 3 },
    { typeName: 'temporay', typeValue: 4 },
  ];

  empRole: any[] = [
    { typeName: 'Admin', typeValue: 1 },
    { typeName: 'User', typeValue: 2 },
  ];
}
