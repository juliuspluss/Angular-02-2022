import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient,
    private _toastService: ToastService) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
    })
  }
// onAddToCart läheb objecti {id:3122 jne}
  onAddToCart(product: Product) {
    // {id:3122 jne}
    const cartFromSS = sessionStorage.getItem("cart");
    let cartProducts: CartProduct[] = [];
    if (cartFromSS) {
      cartProducts = JSON.parse(cartFromSS);
      // on olemas SS

      let index = cartProducts.findIndex(element => element.cartProduct.id == product.id);
      if (index > -1) {
        //on olemas juba ostukorvis - suurendan quantityt
        // cartProducts[index].quantity = cartProducts[index].quantity + 1;
        // pikem versioon alumisest
        cartProducts[index].quantity++;

      } else {
        // ei ole olemas ostukorvis - pushin
        cartProducts.push({cartProduct: product, quantity: 1});

      }

    } else {
      // ei ole olemas SS
      cartProducts.push({cartProduct: product, quantity: 1});

    }

    this._toastService.success('Successfully added to cart');
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
  }

  onSortNameAsc() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  onSortNameDesc() {
    this.products.sort((a, b) => b.name.localeCompare(a.name));
  }

  onSortPriceAsc() {
    this.products.sort((a, b) => a.price - b.price);
  }

  onSortPriceDesc() {
    this.products.sort((a, b) => b.price - a.price);
  }

}
