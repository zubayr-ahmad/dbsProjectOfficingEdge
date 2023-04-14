import { Component,OnInit } from '@angular/core';
import { EmployeesDataService } from '../../../services/employees-data.service'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit{
  allEmployees:any = false;
  today = new Date();
  totalEmployees!: number;
  loading: boolean = false;

  constructor(private empsData:EmployeesDataService, private router:Router){
    empsData.getEmployeesList().subscribe((data:any)=>{
      this.allEmployees= data.result.allUser;
      this.totalEmployees = this.allEmployees.length
      console.log(data)
    })

  }

  ngOnInit(): void {

  }
  
  show(){
    console.log(this.allEmployees)
  }
  deleteEmployee(empId:any, index:number){
    this.loading = true;
    this.empsData.deleteEmployee(empId).subscribe((result:any)=>{
      console.log(result)
      if (result.isSuccess == true){
        this.allEmployees.splice(index,1)   // Remove the item from temp list
        this.totalEmployees -= 1 // decrease total number of employees
        this.expandedRows.splice(this.expandedRows.indexOf(index), 1);
        alert(result.displayMessage)
        this.loading = false
      }
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
