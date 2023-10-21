import { Injectable } from '@angular/core';
import{ categories,products } from '../moke-data/data';
import{ Category, Product } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  private _categoryList:Category[] = categories;
  private _productList:Product[] = products;

  getCategory():Category[]{
    return this._categoryList;
  }

  getProducts():Product[]{
    return this._productList;
  }
}
