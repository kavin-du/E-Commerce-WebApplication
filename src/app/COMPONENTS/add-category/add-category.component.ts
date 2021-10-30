import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../SERVICES/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryFormGroup: FormGroup = this.fb.group({
    categoryName: ['', Validators.required],
  });

  errorMsg: string = '';
  addingItem: boolean = false;
  
  constructor(
    private fb: FormBuilder, 
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) { 

  }
  
  ngOnInit(): void {
  }

  onSubmit(): void {   
    let cat = {
      name: this.categoryFormGroup.controls.categoryName.value,
    }
    console.log(cat);

    this.api.addCategory(cat).subscribe(
      data => {
        this._snackBar.open('Category added successfully.', 'Close', {
          panelClass: ['blue-snackbar']
        });
      },
      err => {
        this.errorMsg = err?.error?.errors;
        console.log(err);
        this._snackBar.open(this.errorMsg, 'Close');
      
      }, 
      () => {
        this.addingItem = true;
        this.clearForm();
      }
    );
    
  }

  clearForm(): void {
    this.categoryFormGroup.reset();
    // Object.keys(this.registerFormGroup.controls)
    // .forEach(key => {
    //   this.registerFormGroup.get(key)?.setErrors(null);
    // });
        
  }

}
