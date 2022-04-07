import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: Product[] = [];
  categories: {name: string}[] = [];
  isIdUnique = false;
  errorMessage = "";

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getProductsFromDb().subscribe(productsFromDb => {
      let newArray = [];
      for (const key in productsFromDb) {
        newArray.push(productsFromDb[key]);
      }
      this.products = newArray;
    })

    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
      let newArray = [];
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
    })
  }

  onSubmit(addItemForm: NgForm) {
    if (addItemForm.valid && this.isIdUnique) {
    this.productService.addProductToDb(addItemForm.value).subscribe(() => {
        addItemForm.reset();
        this.productService.getProductsFromDb().subscribe(productsFromDb => {
          let newArray = [];
          for (const key in productsFromDb) {
            newArray.push(productsFromDb[key]);
          }
          this.products = newArray;
        })
      });
    }
  }

  onCheckIdUniqueness(id: number) {
    this.errorMessage = "";
    if (id === 11110000) {
      this.errorMessage = "This is parcel machine ID";
      return;
    }
    if (id >= 10000000 && id <= 99999999) {
      const index = this.products.findIndex(element => element.id == id)
      if (index === -1) {
        console.log("unique!");
        this.isIdUnique = true;
      } else {
        console.log("Someone has it");
        this.errorMessage = "ID is already in use";
        this.isIdUnique = false;
      }
      console.log(id);
    }
  }
}
