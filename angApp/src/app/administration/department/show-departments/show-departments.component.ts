import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-show-departments',
  templateUrl: './show-departments.component.html',
  styleUrls: ['./show-departments.component.css']
})
export class ShowDepartmentsComponent implements OnInit{
  constructor(private _departmentService:DepartmentService, private router: Router){}

  departments:any;
  today = new Date();
  ngOnInit(): void {
    this._departmentService.getDepartments().subscribe((response:any)=>{
      this.departments=response.kind
    })
    console.log(this.departments)
  }

  addDeptForm(){
    this.router.navigate(['adminHome/department/addDepartment'])
  }
}
