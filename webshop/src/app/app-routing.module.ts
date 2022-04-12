import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CategoryComponent } from './admin/category/category.component';
import { ShopsComponent } from './shops/shops.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "admin", canActivateChild: [AuthGuard], children: [
    { path: "", component: AdminHomeComponent },
    { path: "add", component: AddProductComponent },
    { path: "category", component: CategoryComponent },
    { path: "edit/:productId", component: EditProductComponent },
    { path: "view", component: ViewProductsComponent },
  ] },
  
  { path: "log-in", component: LoginComponent },
  { path: "sign-up", component: SignupComponent },
  // { path: "toode/:name/:description/:id/:category/:isactive", component: SingleProductComponent },
  { path: "toode/:productId", component: SingleProductComponent },
  { path: "shops", component: ShopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
