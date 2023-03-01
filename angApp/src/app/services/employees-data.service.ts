import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  constructor(private emp:HttpClient) {  }

  url1 = 
  'https://hub.dummyapis.com/vj/kkoCBHN';
  url2 = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
  url3 = 'https://reqres.in/api/users?page=2'

  
  postemployeeURL = 'https://reqres.in/api/users'
  employeeshowURL = 'https://reqres.in/api/users?page=2'
  postDeleteEmployeeURL = 'https://reqres.in/api/users'
  employeesGet(){
    return this.emp.get(this.employeeshowURL);
  }

  postEmployee(employee:any){
    return this.emp.post(this.postemployeeURL,employee);

  }
  
  deleteEmployee(empID:any){
    return this.emp.post(this.postDeleteEmployeeURL,empID);
  }
}
