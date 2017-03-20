import { ProductListComponent } from './list/product.list.component';
import { ProductAddComponent } from './add/product.add.component';
import { ProductInfoComponent } from './info/product.info.component';
import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';


const productRoutes: Routes = [
  { path: 'info/:id',component : ProductInfoComponent },
  { path: 'add', component: ProductAddComponent },
  { path: 'list', component: ProductListComponent },
  {
    path: '',
    redirectTo: '/add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
