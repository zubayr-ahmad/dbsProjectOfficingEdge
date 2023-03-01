import { Component } from '@angular/core';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component {
  
  showAdminDashboard = false;
  onLoginSuccess() {
    this.showAdminDashboard = true;
  }
  

}
