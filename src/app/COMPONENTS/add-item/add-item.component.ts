import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../SERVICES/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordConfirmValidator } from '../register/register.component';

type SKU = {
  price: string,
  discount: string,
  quantity: string,
  features: {
    size: string,
    capacity: string
  }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  categories: any[] = [
    {id: 1, name: 'Laptops'},
    {id: 2, name: 'Desktops'},
    {id: 3, name: 'CPU'},
    {id: 4, name: 'Motherboard'},
    {id: 5, name: 'RAM'},
  ]

  // itemFormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   category: new FormControl('3', [Validators.required]),
  //   price: new FormControl('', [Validators.required]),
  //   discount: new FormControl('', [Validators.required]),
  //   quantity: new FormControl('', [Validators.required]),
  //   size: new FormControl('', [Validators.required]),
  //   capacity: new FormControl('', [Validators.required]),

  // });

  public itemFormGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    skus: this.fb.group({
      price: ['', Validators.required],
      discount: ['', Validators.required],
      quantity: ['', Validators.required],
      size: ['', Validators.required],
      capacity: ['', Validators.required],
    }),  
  });
  
  skuList: SKU[] = [];

  errorMsg = '';
  
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar
    ) { 

  }
  
  ngOnInit(): void {
  }

  onSubmit(): void {    
    
    let item: any = {
      name: this.itemFormGroup.controls.name.value,
      category: this.itemFormGroup.controls.category.value,
      skus: this.skuList
    };

    this.api.addItem(item).subscribe(
      data => {
        this._snackBar.open('Item added successfully.', 'Close', {
          panelClass: ['blue-snackbar']
        });
      },
      err => {
        this.errorMsg = err?.error?.errors;
        console.log(err);
        this._snackBar.open(this.errorMsg, 'Close');
      
      }
    );
  }

  addSku(): void {
    let sku: SKU = {
      price: this.itemFormGroup.controls.skus.get('price')?.value, 
      discount: this.itemFormGroup.controls.skus.get('discount')?.value,
      quantity: this.itemFormGroup.controls.skus.get('quantity')?.value,
      features: {
        size: this.itemFormGroup.controls.skus.get('size')?.value,
        capacity: this.itemFormGroup.controls.skus.get('capacity')?.value
      }
    }
    console.log(sku);
    this.skuList.push(sku);
    
  }
  clearForm(): void {
    this.itemFormGroup.reset();
    // Object.keys(this.registerFormGroup.controls)
    // .forEach(key => {
    //   this.registerFormGroup.get(key)?.setErrors(null);
    // });
        
  }

}
