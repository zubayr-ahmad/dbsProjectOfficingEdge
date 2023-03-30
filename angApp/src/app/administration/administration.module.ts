import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmpAddingComponent } from './employee/emp-adding/emp-adding.component';
import { ShowEmployeesComponent } from './employee/show-employees/show-employees.component';

import { DepartmentComponent } from './department/department.component';
import { DeptAddingComponent } from './department/dept-adding/dept-adding.component';

@NgModule({
  declarations: [
    EmpAddingComponent,
    DeptAddingComponent,

    DepartmentComponent,

    EmployeeComponent,
    ShowEmployeesComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxIntlTelInputModule,
    
  ],
  exports: [
    AdminHomeComponent,
    AdminNavbarComponent,

    EmployeeComponent,
    EmpAddingComponent,
    ShowEmployeesComponent,

    DepartmentComponent,
    DeptAddingComponent,
  ],
})
export class AdministrationModule {}
