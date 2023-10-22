import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [PageNotFoundComponent, SearchComponent, ThemeSwitchComponent],
  imports: [CommonModule, FormsModule],
  exports: [PageNotFoundComponent, SearchComponent, ThemeSwitchComponent],
  providers: [ProductService],
})
export class SharedModule {}
