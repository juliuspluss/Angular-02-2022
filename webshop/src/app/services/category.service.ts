import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = "https://webshop-02-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  addCategoryToDb(category: {name: string}) {
    return this.http.post(this.url, {name: category});
  }

  getCategoriesFromDb() {
    return this.http.get<{name: string}[]>(this.url);
  }

  deleteCategoryFromDb(categories: {name: string}[]) {
    return this.http.put(this.url, categories);
  }

}
