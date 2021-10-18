import { Observable } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../SERVICES/api.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  // @Output() product: any = {};
  product$: Observable<any> = new Observable<any>();

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.productId;
    this.getSingleProduct(id);
    
  }

  getSingleProduct(id: string){
    this.product$ = this.api.getSingleProduct(id);
    // this.api.getSingleProduct(id).subscribe(resp => {
    //   this.product = resp;
    //   console.log(resp);
      
    // });
  }
}
