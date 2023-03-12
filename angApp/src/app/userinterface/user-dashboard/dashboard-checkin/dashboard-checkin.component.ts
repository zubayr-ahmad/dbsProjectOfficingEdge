import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-checkin',
  templateUrl: './dashboard-checkin.component.html',
  styleUrls: ['./dashboard-checkin.component.css']
})
export class DashboardCheckinComponent {
  timeStart:any;
  showthepara:any = true;
  shiftStart(){
    let start = new Date()
    this.timeStart = start
    this.showthepara = false
  }
}
