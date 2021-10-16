import { ApiService } from './../../SERVICES/api.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  @Output() product: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.productId;
    this.getSingleProduct(id);
    
  }

  getSingleProduct(id: string){
    this.api.getSingleProduct(id).subscribe(resp => {
      this.product = resp;
      console.log(resp);
      
    });
  }

}
