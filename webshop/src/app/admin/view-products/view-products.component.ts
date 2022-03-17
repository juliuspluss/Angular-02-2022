import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;
      console.log(productsFromDb);
    })
  }

  delete(product:any) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    this.http.put("https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        this.products).subscribe();
  }

}
