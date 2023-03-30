import { Component } from '@angular/core';
import { CountryISO,SearchCountryField  } from 'ngx-intl-tel-input';


import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
@Component({
  selector: 'app-emp-adding',
  templateUrl: './emp-adding.component.html',
  styleUrls: ['./emp-adding.component.css'],
})
export class EmpAddingComponent {
  empAdd: FormGroup;

  CountryISO = CountryISO;
  SearchCountryField= SearchCountryField;

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
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      department: new FormControl("",Validators.required),
      empType: new FormControl("",Validators.required),
      empRole: new FormControl("",Validators.required),
      shiftStartTime: new FormControl("",Validators.required),
      shiftEndTime: new FormControl("",Validators.required),
      phoneNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });

  }

  



  storeEmployee(formData: any): any {
    let data = {
      fname: formData.get('firstName')?.value,
      lname: formData.get('lastName')?.value,
      email: formData.get('email')?.value,
      dept: formData.get('department')?.value,
      empType: formData.get('empType')?.value,
      empRole: formData.get('empRole')?.value,
      shiftStartTime: formData.get('shiftStartTime')?.value,
      shiftEndTime: formData.get('shiftEndTime')?.value,
      phoneNo: formData.get('phoneNo')?.value,
    };

    this.emp.postEmployee(data).subscribe((result) => {
      console.log(result);
    });
  }

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
