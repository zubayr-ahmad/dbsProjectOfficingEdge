import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-leaves',
  templateUrl: './dashboard-leaves.component.html',
  styleUrls: ['./dashboard-leaves.component.css'],
})
export class DashboardLeavesComponent {
  sickLeaves:any;
  paidLeaves:any;

  constructor(private routerL:Router) {
    this.sickLeaves = { balance: 6, availed: 0, available: 6, pending: 0 };
    this.paidLeaves = { balance: 5, availed: 0, available: 5, pending: 0 };
  }

  applyLeave(){
    this.routerL.navigate(['/userHome/applyLeave'])
  }
}
