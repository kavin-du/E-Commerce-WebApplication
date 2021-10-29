import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordConfirmValidator } from '../register/register.component';

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

  itemFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('3', [Validators.required]),
    price: new FormControl([], [Validators.required]),
    discount: new FormControl([], [Validators.required]),
    quantity: new FormControl([], [Validators.required]),
    size: new FormControl([], [Validators.required]),
    capacity: new FormControl([], [Validators.required]),

  });

  noOfSkus: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
  clearForm(): void {
    this.itemFormGroup.reset();
    // Object.keys(this.registerFormGroup.controls)
    // .forEach(key => {
    //   this.registerFormGroup.get(key)?.setErrors(null);
    // });
        
  }

}
