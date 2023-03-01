import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EmployeeComponent } from './employee/employee.component';
import { EmpAddingComponent } from './employee/emp-adding/emp-adding.component';
import { ShowEmployeesComponent } from './employee/show-employees/show-employees.component';

import { DepartmentComponent } from './department/department.component';
import { DeptAddingComponent } from './department/dept-adding/dept-adding.component';

@NgModule({
  declarations: [
    EmpAddingComponent,
    DeptAddingComponent,
    NavbarComponent,
    AdminComponent,
    DepartmentComponent,

    EmployeeComponent,
    ShowEmployeesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    EmpAddingComponent,
    DeptAddingComponent,
    NavbarComponent,
    AdminComponent,
    DepartmentComponent,

    EmployeeComponent,
    ShowEmployeesComponent,
  ],
})
export class AdministrationModule {}
