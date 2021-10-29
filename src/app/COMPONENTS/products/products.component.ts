import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() loadCompleted: boolean = false;
  rating: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  // trackby function for reduce dom redering
  trackByFn(index: number, item: any): number {
    return index;
  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }

}
