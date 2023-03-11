import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavebarComponent } from './user-navebar/user-navebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

// Dependencies

@NgModule({
  declarations: [
    UserNavebarComponent,
    UserHomeComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserHomeComponent,
    UserNavebarComponent,

  ]
})
export class UserinterfaceModule { }
