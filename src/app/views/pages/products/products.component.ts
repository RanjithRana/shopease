import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Category, Product } from '../../../shared/model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'scale(0.9)' })),
      ]),
    ]),
  ],
})
export class ProductsComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  searchResults: Product[] = [];
  selectedCategory: number = 0;
  resetFlag: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategory();
    this.products = this.productService.getProducts();
    this.searchResults = this.products;
  }

  performSearch(query: string) {
    {
      if (query.trim() === '') {
        this.applyFilter();
      } else {
        this.resetFlag = false;
        this.searchResults = this.searchResults.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      }
    }
  }

  applyFilter() {
    this.resetFlag = true;
    if (this.selectedCategory > 0) {
      this.searchResults = this.products.filter(
        (product) => product.category == this.selectedCategory
      );
    } else {
      this.searchResults = this.products;
    }
  }
}
