import { Observable } from 'rxjs';
import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../SERVICES/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})


export class ProductDescriptionComponent implements OnInit {

  // @Output() product: any = {};
  product$: Observable<any> = new Observable<any>();
  // @Output() loadCompleted: boolean = false;

  reviewForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    description: [null, Validators.required]
  });

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService,
    private formBuilder: FormBuilder
    ) { }

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

  onSubmit(): void {
    // TODO add a popup message here (in the html)
    if(!this.reviewForm.valid) {
      return;
    }
    console.log(this.reviewForm.value);
    this.reviewForm.reset();
  }


}
