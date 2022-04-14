import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  sumOfCart = 0;
  parcelMachines: any[] = [];
  selectedParcelMachine = "";

  constructor(private http: HttpClient,
    private cartService: CartService) { }

  ngOnInit(): void {
    const cartProductsFromSS = sessionStorage.getItem("cart");
    if (cartProductsFromSS) {
      this.cartProducts = JSON.parse(cartProductsFromSS);
      this.calculateSumOfCart();
    }

    this.http.get<any[]>("https://www.omniva.ee/locations.json").subscribe(machinesFromAPI => {
      this.parcelMachines = machinesFromAPI.filter(element =>
        element.A0_NAME === "EE");
    })

    const pMachineFromLS = localStorage.getItem("parcelmachine");
    if (pMachineFromLS) {
      this.selectedParcelMachine = pMachineFromLS;
    }
    
  }

  onDecreaseQuantity(product:CartProduct) {
    if (product.cartProduct.id !== 11110000) {
      product.quantity--;
      if (product.quantity < 1) {
        this.onRemoveFromCart(product);
      }
      sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
      this.calculateSumOfCart();
      this.cartService.cartChanged.next(true);
    }
  }

  onIncreaseQuantity(product:CartProduct) {
    if (product.cartProduct.id !== 11110000) {
      product.quantity++;
      sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
      this.calculateSumOfCart();
      this.cartService.cartChanged.next(true);
    }

  }

  onRemoveFromCart(product:CartProduct) {
    if (product.cartProduct.id !== 11110000) {
      const index = this.cartProducts.indexOf(product);
      this.cartProducts.splice(index,1);
      if (this.cartProducts.length === 1 && this.cartProducts[0].cartProduct.id === 11110000) {
        this.onDeleteParcelMachine ();
      }
      sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
      this.calculateSumOfCart();
      this.cartService.cartChanged.next(true);

    }

  }
  
  private calculateSumOfCart() {
    this.sumOfCart = 0;
    this.cartProducts.forEach(element => 
      this.sumOfCart += element.cartProduct.price * element.quantity);
  }

  onDeleteParcelMachine () {
    this.selectedParcelMachine = "";
    localStorage.removeItem("parcelmachine");
    const index = this.cartProducts.findIndex(element => element.cartProduct.id === 11110000);
    this.cartProducts.splice(index,1);
  }

  onSelectedPMachine() {
    localStorage.setItem("parcelmachine", this.selectedParcelMachine);
    this.cartProducts.push(
      {
        cartProduct: {
          id: 11110000, 
          name: "Pakiautomaadi tasu", 
          price: 3.5, 
          imgSrc: "/assets/Untitled.png", 
          category: "", 
          description: "", 
          isActive: true
        },
        quantity: 1
     }
    );
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  toPay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const data = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.sumOfCart,
      "order_reference": Math.ceil(Math.random()*999999),
      "nonce": "92ddcfab96e34a5f" + Math.ceil(Math.random()*999999) + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://en.wikipedia.org/wiki/My_Little_Pony"
    }
    const headers = {
      headers: new HttpHeaders(
        {
          "Authorization": 
          "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
      )
    }

    this.http.post<any>(url, data, headers).subscribe(res => 
      location.href = res.payment_link
      );
  }
}
