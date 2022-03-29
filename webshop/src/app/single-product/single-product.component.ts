import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //node_module seest
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product!: Product; // neid muutjaid kasutame HTMLis
  // name: any;
  // description: any;
  // id: any;
  // category: any;
  // isActive: any;
  

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    // const id = location.href.split("toode/")[1];
    const id = this.route.snapshot.paramMap.get("productId");
    
    // this.name = this.route.snapshot.paramMap.get("name");
    // this.description = this.route.snapshot.paramMap.get("description");
    // this.id = this.route.snapshot.paramMap.get("id");
    // this.category = this.route.snapshot.paramMap.get("category");
    // this.isActive = this.route.snapshot.paramMap.get("isactive");
    // console.log(id);

    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      const products = newArray;
      let productFound = products.find(element => element.id == Number(id));
      if (productFound) {
        this.product = productFound;
      }
    })
  }

}
