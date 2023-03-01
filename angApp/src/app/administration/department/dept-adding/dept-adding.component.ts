import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dept-adding',
  templateUrl: './dept-adding.component.html',
  styleUrls: ['./dept-adding.component.css']
})
export class DeptAddingComponent {

  dept_add: FormGroup;
  deptName: string = '';
  deptDescription: string='';

  constructor(private formbiulder: FormBuilder) {
    this.dept_add = formbiulder.group({
      dept_name: new FormControl(),
      dept_description: new FormControl(),

    });
  }


  storeDept(dept_add: any): any {
    let data = {
      dpetName: this.dept_add.get('dept_name')?.value,
      deptDescription: this.dept_add.get('dept_description')?.value,

    };
    console.log(data);
    return data;
  }
}
