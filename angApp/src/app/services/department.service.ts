import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // getDataUrl = 'https://www.googleapis.com/books/v1/volumes?q=quilting'
  // getDataUrl = 'https://www.googleapis.com/books/v1/volumes/4CFjDwAAQBAJ'
  getDataUrl = 'https://tenders.guru/api/ua/tenders/'
  constructor(private http:HttpClient) { }
  getDepartments(){
    const getAllDepartmentsUrl = 'https://officingedge.azurewebsites.net/GetDepartmentList'
    return this.http.get(getAllDepartmentsUrl)
  }
}
