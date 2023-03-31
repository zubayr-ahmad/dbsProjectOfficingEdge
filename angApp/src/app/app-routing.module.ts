import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
import { AdminNavbarComponent } from './administration/admin-navbar/admin-navbar.component';

import { DepartmentComponent } from './administration/department/department.component';
import { DeptAddingComponent } from './administration/department/dept-adding/dept-adding.component';
import { EmpAddingComponent } from './administration/employee/emp-adding/emp-adding.component';

import { EmployeeComponent } from './administration/employee/employee.component';

import { ForgetPasswordComponent } from './login-system/forget-password/forget-password.component';
import { LoginFormComponent } from './login-system/login-form/login-form.component';

import { ApplyLeaveComponent } from './userinterface/user-dashboard/dashboard-leaves/apply-leave/apply-leave.component';

import { UserDashboardComponent } from './userinterface/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './userinterface/user-home/user-home.component';
import { UserNavebarComponent } from './userinterface/user-navebar/user-navebar.component';
import { UserProfileComponent } from './userinterface/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path:'addEmployee',component:EmpAddingComponent},

  // {
  //   path: 'adminHome',
  //   component: AdminHomeComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'userDashboard' },
  //     { path: 'employees', component: EmployeeComponent },
  //     { path: 'departments', component: DepartmentComponent },
  //   ],
  // },


  {
    path: 'department',
    component: DepartmentComponent,
    children: [{ path: 'deptAddingForm', component: DeptAddingComponent }],
  },

  { path: 'loginForm', component: LoginFormComponent },
  {path:'forgetPassword',component:ForgetPasswordComponent},

  // Following are routings for user interface
  { path: 'userHome', component: UserHomeComponent, 
    children:[
    { path: '', pathMatch: 'full', redirectTo: 'userDashboard' }, // redirect to dashboard
    { path: 'userNavbar', component: UserNavebarComponent },
    { path: 'userDashboard', component: UserDashboardComponent },
    { path: 'userProfile', component: UserProfileComponent},
    { path: 'applyLeave', component:ApplyLeaveComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
