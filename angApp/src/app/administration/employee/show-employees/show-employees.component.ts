import { Component } from '@angular/core';
import { EmployeesDataService } from '../../../services/employees-data.service'
@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent {
  allEmployees:any;
  constructor(private empsData:EmployeesDataService){
    empsData.employeesGet().subscribe((data)=>{
      this.allEmployees= data;
      console.log(data)
    })
  }
  
  show(){
    console.log(this.allEmployees)
  }
  deleteEmployee(empId:any){
    this.empsData.deleteEmployee(empId).subscribe((result)=>{
      console.log(empId)
    })

  }
}
