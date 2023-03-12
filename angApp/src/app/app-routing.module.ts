import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './administration/admin/admin.component';
import { DepartmentComponent } from './administration/department/department.component';
import { DeptAddingComponent } from './administration/department/dept-adding/dept-adding.component';
import { EmpAddingComponent } from './administration/employee/emp-adding/emp-adding.component';
import { EmployeeComponent } from './administration/employee/employee.component';
import { ShowEmployeesComponent } from './administration/employee/show-employees/show-employees.component';
import { LoginFormComponent } from './login-system/login-form/login-form.component';
import { DashboardClockComponent } from './userinterface/user-dashboard/dashboard-clock/dashboard-clock.component';
import { ApplyLeaveComponent } from './userinterface/user-dashboard/dashboard-leaves/apply-leave/apply-leave.component';
import { DashboardLeavesComponent } from './userinterface/user-dashboard/dashboard-leaves/dashboard-leaves.component';
import { UserDashboardComponent } from './userinterface/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './userinterface/user-home/user-home.component';
import { UserNavebarComponent } from './userinterface/user-navebar/user-navebar.component';
import { UserProfileComponent } from './userinterface/user-profile/user-profile.component';

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
