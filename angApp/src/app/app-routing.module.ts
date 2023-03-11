import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './administration/admin/admin.component';
import { DepartmentComponent } from './administration/department/department.component';
import { DeptAddingComponent } from './administration/department/dept-adding/dept-adding.component';
import { EmpAddingComponent } from './administration/employee/emp-adding/emp-adding.component';
import { EmployeeComponent } from './administration/employee/employee.component';
import { ShowEmployeesComponent } from './administration/employee/show-employees/show-employees.component';
import { LoginFormComponent } from './login-system/login-form/login-form.component';
import { UserHomeComponent } from './userinterface/user-home/user-home.component';
import { UserNavebarComponent } from './userinterface/user-navebar/user-navebar.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'admin', component: AdminComponent },

  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'empAddingForm', component: EmpAddingComponent },
      { path: 'empShowing', component: ShowEmployeesComponent },
    ],
  },

  {
    path: 'department',
    component: DepartmentComponent,
    children: [{ path: 'deptAddingForm', component: DeptAddingComponent }],
  },

  { path: 'loginForm', component: LoginFormComponent },

  // Following are routings for user interface
  { path: 'userHome', component: UserHomeComponent },
  { path: 'userNavbar', component: UserNavebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
