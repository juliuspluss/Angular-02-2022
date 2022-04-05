import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];
  originalProducts: Product[] = [];
  wordCount = 4;
  searchedProduct = "";
  


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
      this.originalProducts = newArray;
    })
  }

  onDelete(product:Product) {
    const index = this.originalProducts.indexOf(product);
    this.originalProducts.splice(index,1);
    this.productService.deleteProductFromDb(this.originalProducts).subscribe();
    console.log(product);
  }

  onSearch() {
    this.products = this.originalProducts.filter(element => 
      element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) > -1 
      || element.id.toString().indexOf(this.searchedProduct.toLowerCase()) < -1);
  }

}
