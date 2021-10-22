import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HomeComponent } from './PAGES/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { ProductPageComponent } from './PAGES/product-page/product-page.component';
import { ProductDescriptionComponent } from './COMPONENTS/product-description/product-description.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInput, MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeImageSliderComponent } from './COMPONENTS/home-image-slider/home-image-slider.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    HomeImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    RatingModule,
    IvyCarouselModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
