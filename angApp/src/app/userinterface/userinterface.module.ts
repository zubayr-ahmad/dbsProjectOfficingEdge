import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavebarComponent } from './user-navebar/user-navebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardClockComponent } from './user-dashboard/dashboard-clock/dashboard-clock.component';
import { DashboardAttendenceSummaryComponent } from './user-dashboard/dashboard-attendence-summary/dashboard-attendence-summary.component';
import { DashboardLeavesComponent } from './user-dashboard/dashboard-leaves/dashboard-leaves.component';
import { DashboardCheckinComponent } from './user-dashboard/dashboard-checkin/dashboard-checkin.component';
import { ApplyLeaveComponent } from './user-dashboard/dashboard-leaves/apply-leave/apply-leave.component';

// Dependencies
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardQuoteComponent } from './user-dashboard/dashboard-quote/dashboard-quote.component';

@NgModule({
  declarations: [
    UserNavebarComponent,
    UserHomeComponent,
    UserDashboardComponent,
    UserProfileComponent,
    DashboardClockComponent,
    DashboardAttendenceSummaryComponent,
    DashboardLeavesComponent,
    DashboardCheckinComponent,
    ApplyLeaveComponent,
    DashboardQuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule

  ],
  exports:[
    UserNavebarComponent,
    UserHomeComponent,
    UserDashboardComponent,
    UserProfileComponent,
    DashboardClockComponent,
    DashboardAttendenceSummaryComponent,
    DashboardLeavesComponent,
    DashboardCheckinComponent,
    ApplyLeaveComponent
  ]
})
export class UserinterfaceModule { }
