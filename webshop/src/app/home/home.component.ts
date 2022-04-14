import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from '../auth/auth.service';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  originalProducts: Product[] = [];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  isLoggedIn = false;
  categories: string [] = [];
  selectedCategory = "all";

  constructor(
    private _toastService: ToastService,
    private cartService: CartService,
    private productService: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
      this.categories = this.originalProducts
                        .map(element => element.category)
                        .filter((element, index, array) => 
                            index === array.indexOf(element)
                        );
                        console.log(this.categories)
    });

    this.checkIfLoggedIn();
  }

  private checkIfLoggedIn() {
      this.loggedInFromSS();
      this.authService.loggedInChanged.subscribe(() => {
        this.loggedInFromSS();
      })
    }
  
  loggedInFromSS() {
    if (sessionStorage.getItem("userData")) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onFilterByCategory(category: string) {
    if (category === 'all') {
      this.products = this.originalProducts;
    } else {
    this.products = this.originalProducts.filter(element => 
      element.category === category);
    }
    this.selectedCategory = category;
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
        const parcelIndex = cartProducts.findIndex(element => element.cartProduct.id === 11110000);
        if (parcelIndex === -1) {
        cartProducts.push({cartProduct: product, quantity: 1});
        } else {
          cartProducts.splice(cartProducts.length-2, 0, {cartProduct: product, quantity: 1});
        }
      }

    } else {
      // ei ole olemas SS
      cartProducts.push({cartProduct: product, quantity: 1});

    }
    this._toastService.success('Successfully added to cart');
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    this.cartService.cartChanged.next(true)
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
