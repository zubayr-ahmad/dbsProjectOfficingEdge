import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegister } from '../Interfaces/userRegister.interface';
@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  constructor(private http:HttpClient) {  }

  url1 = 
  'https://hub.dummyapis.com/vj/kkoCBHN';
  url2 = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
  url3 = 'https://reqres.in/api/users?page=2'
  getEmployeesUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001' // good api

  
  
  employeeshowURL = 'https://reqres.in/api/users?page=2'
  postDeleteEmployeeURL = 'https://reqres.in/api/users'
  getEmployeesList(){
    const getAllEmployeesUrl = 'https://officingedge.azurewebsites.net/GetAllUser'
    return this.http.get(getAllEmployeesUrl);
  }

  registerEmployee(employee:UserRegister){
    const registerEmployeeUrl = 'https://officingedge.azurewebsites.net/Register'
    let token=localStorage.getItem('access_token');
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/json",
        // 'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post(registerEmployeeUrl,employee);

  }
  
  deleteEmployee(empID:any){
    const deleteEmployeeUrl = 'https://officingedge.azurewebsites.net/DeleteUser'
    return this.http.delete(deleteEmployeeUrl,{params:{id:empID}});
  }
}
