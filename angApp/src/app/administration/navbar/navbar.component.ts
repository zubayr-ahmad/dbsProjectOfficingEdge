import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){}
  Employee(){
    this.router.navigate(['./employee/empAddingForm'])
  }
  Dept(){
    this.router.navigate(['./department/deptAddingForm'])
  }
  ShowEmployees(){
    this.router.navigate(['./employee/empShowing'])
  }
}
