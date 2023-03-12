import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  leaveForm!: FormGroup;

  constructor(private fb: FormBuilder, private routerA:Router) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
    });

  
  }
  onSubmitLeaveForm(): void {
    this.routerA.navigate(['/userHome/userDashboard'])
  }
}
