import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public categoryFormGroup: FormGroup = this.fb.group({
    categoryName: ['', Validators.required],
  });
  
  
  constructor(private fb: FormBuilder) { 

  }
  
  ngOnInit(): void {
  }

  onSubmit(): void {   
    console.log(this.categoryFormGroup.controls.categoryName.value);
    
  }

  clearForm(): void {
    this.categoryFormGroup.reset();
    // Object.keys(this.registerFormGroup.controls)
    // .forEach(key => {
    //   this.registerFormGroup.get(key)?.setErrors(null);
    // });
        
  }

}
