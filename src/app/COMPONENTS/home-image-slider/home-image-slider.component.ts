import { Component, OnInit } from '@angular/core';

// imagepath type for corousel
type ImagePath = {
  path: string
}

@Component({
  selector: 'app-home-image-slider',
  templateUrl: './home-image-slider.component.html',
  styleUrls: ['./home-image-slider.component.scss']
})
export class HomeImageSliderComponent implements OnInit {
  
  banners: ImagePath[] = [
    {path: 'http://opencart.templatemela.com/OPC07/OPC070174/OPC1/image/cache/catalog/Main-Bannre-1-915x420.jpg'},
    {path: 'http://opencart.templatemela.com/OPC07/OPC070174/OPC1/image/cache/catalog/Main-Bannre-3-915x420.jpg'},
    {path: 'http://opencart.templatemela.com/OPC07/OPC070174/OPC1/image/cache/catalog/Main-Bannre-2-915x420.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
