import { ApiService } from './../../SERVICES/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // categories: any[] = [
  //   'Desktops',
  //   'Laptops & Notebooks',
  //   'Components',
  //   'Tablets',
  //   'Software',
  //   'Phones & PDAs',
  //   'Cameras',
  //   'MP3 Players',
  //   'Iphones',
  //   'headphones',
  //   'keyboards'
  // ];

  categories: any[] = [];

  constructor(private api: ApiService) { }
  
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.api.getCategories().subscribe(
      resp => { 
        this.categories = resp.data;
        console.log(resp.data);
        
      },
      err => {
        console.log(err);        
      }
    );
  }

}
