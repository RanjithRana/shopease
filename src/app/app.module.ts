import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/base/header/header.component';
import { FooterComponent } from './views/base/footer/footer.component';
import { HomeModule } from './views/pages/home/home.module';
import { ProductsModule } from './views/pages/products/products.module';
import { AboutUsModule } from './views/pages/about-us/about-us.module';
import { ContactModule } from './views/pages/contact/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    AboutUsModule,
    ContactModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
