import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [
    'Desktops',
    'Laptops & Notebooks',
    'Components',
    'Tablets',
    'Software',
    'Phones & PDAs',
    'Cameras',
    'MP3 Players',
    'Iphones',
    'headphones',
    'keyboards'
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

}
