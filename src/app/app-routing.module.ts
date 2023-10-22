import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./views/pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./views/pages/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./views/pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
