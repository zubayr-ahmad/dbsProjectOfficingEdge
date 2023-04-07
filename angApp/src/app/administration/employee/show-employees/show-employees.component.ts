import { Component,OnInit } from '@angular/core';
import { EmployeesDataService } from '../../../services/employees-data.service'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit{
  allEmployees:any;
  today = new Date();
  constructor(private empsData:EmployeesDataService, private router:Router){
    empsData.employeesGet().subscribe((data)=>{
      this.allEmployees= data;
      console.log(data)
    })
  }

  ngOnInit(): void {

  }
  
  show(){
    console.log(this.allEmployees)
  }
  deleteEmployee(empId:any){
    this.empsData.deleteEmployee(empId).subscribe((result)=>{
      console.log(empId)
    })
  }

  // Move to add EMployee Form on button clik
  addEmpForm(){
    this.router.navigate(['adminHome/employee/addEmployee'])
  }

  // Below is the code to show description and comments on button click
  expandedRows: any[] = [];
  toggleRow(index: number) {
    // Removes the index if it is included in expandedRows otherwise push it in
    if (this.expandedRows.includes(index)) {
      this.expandedRows.splice(this.expandedRows.indexOf(index), 1);
    } else {
      this.expandedRows.push(index);
    }
  }

  isRowExpanded(index: number) {
    return this.expandedRows.includes(index);
  }







}
