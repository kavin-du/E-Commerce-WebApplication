import { ProfileComponent } from './COMPONENTS/profile/profile.component';
import { AdminComponent } from './PAGES/admin/admin.component';
import { LoginPageComponent } from './PAGES/login-page/login-page.component';
import { ProductPageComponent } from './PAGES/product-page/product-page.component';
import { HomeComponent } from './PAGES/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: LoginPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'products/:productId', component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
