import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsComponent } from './products.component';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    productService = jasmine.createSpyObj('ProductService', ['getCategory', 'getProducts']);

    TestBed.configureTestingModule({
      declarations: [ProductsComponent]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize Categories and Products', () => {
    const mockCategories = [{ id: 1, name: 'Category 1' }];
    const mockProducts = [{ id: 1, name: 'Dell Laptop Inspiron 15', category: 100, price: 100, description: 'RAM 1GB | ROM 12GM | Camera 12MP', imgUrl:'https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg' }];

    productService.getCategory.and.returnValue(mockCategories);
    productService.getProducts.and.returnValue(mockProducts);

    fixture.detectChanges();

    expect(component.categories).toEqual(mockCategories);
    expect(component.products).toEqual(mockProducts);
    expect(component.searchResults).toEqual(mockProducts);
  });
});
