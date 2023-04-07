;import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './administration/admin-home/admin-home.component';
import { AdminNavbarComponent } from './administration/admin-navbar/admin-navbar.component';

import { DeptAddingComponent } from './administration/department/dept-adding/dept-adding.component';
import { EmpAddingComponent } from './administration/employee/emp-adding/emp-adding.component';


import { ForgetPasswordComponent } from './login-system/forget-password/forget-password.component';
import { LoginFormComponent } from './login-system/login-form/login-form.component';

import { ApplyLeaveComponent } from './userinterface/user-dashboard/dashboard-leaves/apply-leave/apply-leave.component';

import { UserDashboardComponent } from './userinterface/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './userinterface/user-home/user-home.component';
import { UserNavebarComponent } from './userinterface/user-navebar/user-navebar.component';
import { UserProfileComponent } from './userinterface/user-profile/user-profile.component';
import { ShowEmployeesComponent } from './administration/employee/show-employees/show-employees.component';
import { PageNotFoundComponent } from './errorComponents/page-not-found/page-not-found.component';
import { ShowDepartmentsComponent } from './administration/department/show-departments/show-departments.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
    
  { path: 'loginForm', component: LoginFormComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },

  {
    path: 'adminHome',
    component: AdminHomeComponent,

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'employee/showEmployees' }, // redirect to dashboard
        { path: 'employee/addEmployee', component: EmpAddingComponent },
        { path: 'employee/showEmployees', component: ShowEmployeesComponent },
        { path: 'department/addDepartment', component: DeptAddingComponent },
        { path: 'department/showDepartments',component:ShowDepartmentsComponent},
        { path:'**',component:PageNotFoundComponent},
    ],

  },



  // Following are routings for user interface
  {
    path: 'userHome',
    component: UserHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'userDashboard' }, // redirect to dashboard
      { path: 'userNavbar', component: UserNavebarComponent },
      { path: 'userDashboard', component: UserDashboardComponent },
      { path: 'userProfile', component: UserProfileComponent },
      { path: 'applyLeave', component: ApplyLeaveComponent },
    ],
  },
    // Testing routes
    { path:'special',component:ShowEmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
