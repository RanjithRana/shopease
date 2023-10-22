import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class ProductsModule { }
