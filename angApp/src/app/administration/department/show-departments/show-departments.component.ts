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
}
