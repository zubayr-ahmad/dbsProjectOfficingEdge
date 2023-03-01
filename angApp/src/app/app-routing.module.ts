import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './administration/admin/admin.component';
import { DepartmentComponent } from './administration/department/department.component';
import { DeptAddingComponent } from './administration/department/dept-adding/dept-adding.component';
import { EmpAddingComponent } from './administration/employee/emp-adding/emp-adding.component';
import { EmployeeComponent } from './administration/employee/employee.component';
import { ShowEmployeesComponent } from './administration/employee/show-employees/show-employees.component';
import { LoginFormComponent } from './login-system/login-form/login-form.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  
  {path:'employee',component:EmployeeComponent,
    children:[
      {path:'empAddingForm',component:EmpAddingComponent},
      {path:'empShowing',component:ShowEmployeesComponent}
    ]
  },
  
  {path:'department',component:DepartmentComponent,
  children:[
    {path:'deptAddingForm',component:DeptAddingComponent},
  
    ]
  },
  
  {path:'loginForm',component:LoginFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
