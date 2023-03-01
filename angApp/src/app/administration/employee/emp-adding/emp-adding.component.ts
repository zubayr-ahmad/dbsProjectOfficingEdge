import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeesDataService } from 'src/app/services/employees-data.service';
@Component({
  selector: 'app-emp-adding',
  templateUrl: './emp-adding.component.html',
  styleUrls: ['./emp-adding.component.css'],
})
export class EmpAddingComponent {
  emp_add: FormGroup;

  // fisrtName: string = '';
  // lastName: string = '';
  // empEmail:string = '';
  // department_type: string = '';
  // empType: number = 1;

  constructor(private formbiulder: FormBuilder, private emp: EmployeesDataService) {
    this.emp_add = formbiulder.group({
      first_name: new FormControl(),
      last_name: new FormControl(),
      emp_email: new FormControl(),
      department: new FormControl(),
      emp_type: new FormControl(),
    });
  }

  storeEmployee(emp_add: any): any {
    let data = {
      fname: this.emp_add.get('first_name')?.value,
      lname: this.emp_add.get('last_name')?.value,
      empEmail: this.emp_add.get('last_name')?.value,
      dept: this.emp_add.get('department')?.value,
      empType: this.emp_add.get('emp_type')?.value,
    };


    this.emp.postEmployee(data).subscribe((result)=>{
      console.log(result)
    })
  }

  depart: any[] = [
    { deptName: 'IT', deptValue: 1 },
    { deptName: 'Accounts', deptValue: 2 },
    { deptName: 'Adminisstration', deptValue: 3 },
    { deptName: 'Quality Assurance', deptValue: 4 },
  ];

  opt_departement: string[] = ['IT', 'Testing', 'Administration'];

  typeEmployee: any[] = [
    { typeName: 'part-time', typeValue: 1 },
    { typeName: 'full-time', typeValue: 2 },
    { typeName: 'seasonal', typeValue: 3 },
    { typeName: 'temporay', typeValue: 4 },
  ];
}
