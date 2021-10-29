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
import { LoginPageComponent } from './PAGES/login-page/login-page.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './COMPONENTS/categories/categories.component';
import { AdminPageComponent } from './PAGES/admin-page/admin-page.component';
import { AddItemComponent } from './COMPONENTS/add-item/add-item.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    HomeComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    HomeImageSliderComponent,
    LoginPageComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CategoriesComponent,
    AdminPageComponent,
    AddItemComponent,
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
    MatProgressSpinnerModule,
    MatSnackBarModule,
    NgbModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
