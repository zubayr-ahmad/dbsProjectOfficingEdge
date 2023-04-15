import { Component } from '@angular/core';
// import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
  AbstractControl,
} from '@angular/forms';

import { EmployeesDataService } from 'src/app/services/employees-data.service';
import { UserRegister } from 'src/app/Interfaces/userRegister.interface';
import { catchError, of } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-emp-adding',
  templateUrl: './emp-adding.component.html',
  styleUrls: ['./emp-adding.component.css'],
})
export class EmpAddingComponent {
  empAdd: FormGroup;
  today = new Date();
  loading:boolean = false;
  isAnError:boolean = false;
  // CountryISO = CountryISO;
  // SearchCountryField = SearchCountryField;

  constructor(
    private formbiulder: FormBuilder,
    private emp: EmployeesDataService,
    private _departmentService:DepartmentService,

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
      phoneNo: new FormControl(null),
    });
    this._departmentService.getDepartments().subscribe((response:any)=>{
      this.depart = response.result.departmentList
    })
  }

  storeEmployee(formData: any): any {
    this.loading = true
    if (formData.valid) {
      let empRole01 = formData.get('isAdmin')?.value ? 0 : 1;
      let userName01 =
        formData.get('firstName')?.value[0] + formData.get('lastName')?.value;
      let companyEmail01 = userName01 + '@example.com';

      let startTime = this.convertToDateTime(formData.get('shiftStartTime')?.value);
      let endTime = this.convertToDateTime(formData.get('shiftEndTime')?.value);
      let durationinMinutes = this.convertToMinutes(formData.get('shiftStartTime')?.value, formData.get('shiftEndTime')?.value);

      let data: UserRegister = {
        firstName: formData.get('firstName')?.value,
        lastName: formData.get('lastName')?.value,
        username: userName01,
        email: formData.get('email')?.value,
        companyEmail: companyEmail01,
        password: 'Office@123',
        phoneNumber: formData.get('phoneNo')?.value,
        // phoneNumber: '00000000000',
        userRole: empRole01,
        empDepId: formData.get('department')?.value,
        // empDepId: 500,
        empTypeId: formData.get('empType')?.value,
        // empTypeId: 500,
        shiftStart: startTime.toISOString(),
        // shiftStart: this.today.toISOString(),
        shiftEnd: endTime.toISOString(),
        // shiftEnd: this.today.toISOString(),
        shiftDuration: durationinMinutes,
      };
      console.log(data);

      this.emp.registerEmployee(data)
      .pipe(
        catchError((error: any) => {
          if (error.error.isSuccess === false) {
            this.isAnError = true
            alert(error.error.errorMEssages)
            console.log('Login failed: ', error.error.errorMessage);
          } else {
            throwIfFalsy(() => error);
          }
          return of(null);
        })
      )

      .subscribe((result) => {
        console.log(result);
        this.loading = false
        if (this.isAnError == false){
          alert('Employee added successfully! Keep growing :)');
        }
        
      });
    } else {
      this.loading = false
      // Mark all the controls as touched to show validation messages
      this.empAdd.markAllAsTouched();
    }
  }

  // Convert shift timings to dateTime
  convertToDateTime(timeString: string) {
    const today = new Date(); // get the current date

    // split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':');
    // set the hours and minutes on the current date
    today.setHours(Number(hours));
    today.setMinutes(Number(minutes));

    // format the date as a string in the format "yyyy-mm-ddThh:mm:ssZ"
    const shiftTime = today;
    return shiftTime
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
    let workingMinutes =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60);
    return workingMinutes;
  }

  // depart: any[] = [
  //   { deptName: 'IT', deptValue: 1 },
  //   { deptName: 'Accounts', deptValue: 2 },
  //   { deptName: 'Adminisstration', deptValue: 3 },
  //   { deptName: 'Quality Assurance', deptValue: 4 },
  // ];
  depart: any;

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
function throwIfFalsy(arg0: () => any) {
  throw new Error('Function not implemented.');
}

