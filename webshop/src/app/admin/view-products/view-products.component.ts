import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
    })
  }

  onDelete(product:Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    this.http.put("https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        this.products).subscribe();
    console.log(product);
  }

}
