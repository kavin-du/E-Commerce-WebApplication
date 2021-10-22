import { ApiService } from './../../SERVICES/api.service';
import { Component, OnInit, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  // items$: Observable<any[]> = new Observable();

  // private _destroyed$ = new Subject();
  @Output() loadCompleted: boolean = false;
  constructor(private api: ApiService) { }

  public ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.api.getProducts()
    .subscribe(
      resp => {  // ? need to unsubscribe, otherwise mem leak
        this.items = resp;
        // console.log(resp);      
      }, err => { 
        console.log(err);
        
      }, () => {
        this.loadCompleted = true;
      }
    );

    // this.items$ = this.api.getProducts();
  }
}
