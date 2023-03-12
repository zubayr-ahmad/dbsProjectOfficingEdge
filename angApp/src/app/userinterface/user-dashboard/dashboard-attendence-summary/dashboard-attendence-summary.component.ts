import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-attendence-summary',
  templateUrl: './dashboard-attendence-summary.component.html',
  styleUrls: ['./dashboard-attendence-summary.component.css']
})
export class DashboardAttendenceSummaryComponent {
  today = new Date();
}
