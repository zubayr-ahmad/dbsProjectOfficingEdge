import { Component } from '@angular/core';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
  AbstractControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
import { UserRegister } from 'src/app/Interfaces/userRegister.interface';
@Component({
  selector: 'app-emp-adding',
  templateUrl: './emp-adding.component.html',
  styleUrls: ['./emp-adding.component.css'],
})
export class EmpAddingComponent {
  empAdd: FormGroup;

  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;

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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      department: new FormControl(null, Validators.required),
      empType: new FormControl(null, Validators.required),
      isAdmin: new FormControl(false),
      shiftStartTime: new FormControl(null, Validators.required),
      shiftEndTime: new FormControl(null, Validators.required),
      phoneNo: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }

  storeEmployee(formData: any): any {
    if (formData.valid) {
      let empRole01 = 2;
      let userName01 = formData.get('firstName')?.value[0] + formData.get('lastName')?.value
      let companyEmail01 = userName01+'@officingEdge.com'
      if (formData.get('empType')?.value == true) {
        empRole01 = 1;
      }
      let st = formData.get('shiftStartTime')?.value;
      let ed = formData.get('shiftEndTime')?.value;
      let durationinMinutes = this.convertToMinutes(st,ed)

      let data:UserRegister = {
        firstName: formData.get('firstName')?.value,
        lastName: formData.get('lastName')?.value,
        username:userName01,
        email: formData.get('email')?.value,
        companyEmail:companyEmail01,
        password:'Office@123',
        phoneNumber: formData.get('phoneNo')?.value.nationalNumber,
        userRole: empRole01,
        empDepId: formData.get('department')?.value,
        empTypeId: formData.get('empType')?.value,
        shiftStart: formData.get('shiftStartTime')?.value,
        shiftEnd: formData.get('shiftEndTime')?.value,
        shiftDuration: durationinMinutes,
        
      };
      console.log(data)
      this.emp.registerEmployee(data).subscribe((result) => {
        console.log(result);
        alert('Form submitted successfully');
      });
    } else {
      // Mark all the controls as touched to show validation messages
      this.empAdd.markAllAsTouched();
    }
  }

  
  //Function for calculating the duration of the employee time
  convertToMinutes(st: string, ed: string) {
    // Convert start time and end time to Date objects
    const startDate = new Date();
    const [stHours, stMinutes] = st.split(':').map(Number);
    startDate.setHours(stHours);
    startDate.setMinutes(stMinutes);

    const endDate = new Date();
    const [edHours, edMinutes] = ed.split(':').map(Number);
    endDate.setHours(edHours);
    endDate.setMinutes(edMinutes);

    // If end time is before start time, add a day to end time
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }

    // Calculate working minutes by subtracting start time from end time
    let workingMinutes = ((endDate.getTime() - startDate.getTime()) / (1000 * 60));
    return workingMinutes
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
