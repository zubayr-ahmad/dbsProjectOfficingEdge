import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Department } from 'src/app/Interfaces/department.interface';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-dept-adding',
  templateUrl: './dept-adding.component.html',
  styleUrls: ['./dept-adding.component.css']
})
export class DeptAddingComponent {

  dept_add: FormGroup;
  deptName: string = '';
  deptDescription: string='';
  loading:boolean = false;
  isAnError: boolean | undefined;

  constructor(
    private formbiulder: FormBuilder,
    private _departmentService:DepartmentService
    ) {
    this.dept_add = formbiulder.group({
      dept_name: new FormControl(),
      dept_description: new FormControl(),

    });
  }


  storeDept(dept_add01:any){
    this.loading = true
    let dept:Department = {
      name: dept_add01.get('dept_name')?.value,
      description: dept_add01.get('dept_description')?.value,
    };
    this._departmentService.addDepartment(dept)
    .pipe(
      catchError((error: any) => {
        if (error.error.isSuccess === false) {
          this.isAnError = true
          alert(error.error.errorMEssages)
          console.log('Department adding failed: ', error.error.errorMessage);

        } else {
          throwIfFalsy(() => error);

        }
        

        return of(null);
      })
    )
    
    
    
    .subscribe((response:any)=>{
      this.loading = false
      alert(response.displayMessage)
      console.log('Dept response',response)
    })
    
  }
}
function throwIfFalsy(arg0: () => any) {
  throw new Error('Function not implemented.');
}

