import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-checkin',
  templateUrl: './dashboard-checkin.component.html',
  styleUrls: ['./dashboard-checkin.component.css']
})
export class DashboardCheckinComponent {
  shiftStartTime!:Date;
  shiftEndTime!:Date;
  timeEnd:any;
  checkinStatus:number = 0; // 0 = shift not started, 1 = checked-in, 2 = checked-out (shiftEnds)
  showthepara:any = true;
  shiftStart(){
    this.checkinStatus = 1;
    this.shiftStartTime = new Date();
    this.showthepara = false
    console.log("Shift started at:",this.shiftStartTime)
  }

  shiftEnd(){
    this.checkinStatus = 2;
    this.shiftEndTime = new Date();
    console.log("Shift ended at:",this.shiftEndTime)
  }

}
