import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-show-departments',
  templateUrl: './show-departments.component.html',
  styleUrls: ['./show-departments.component.css']
})
export class ShowDepartmentsComponent implements OnInit{
  fetchingAllDepartments:boolean = false;



  constructor(private _departmentService:DepartmentService, private router: Router){}

  alldepartments:any;
  totalDepartments !: number;
  today = new Date();
  ngOnInit(): void {
    this._departmentService.getDepartments().subscribe((response:any)=>{
      this.alldepartments=response.result.departmentList
      this.totalDepartments = this.alldepartments.length
      console.log('Respnose: ',response)
    })
    
  }

  addDeptForm(){
    this.router.navigate(['adminHome/department/addDepartment'])
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
