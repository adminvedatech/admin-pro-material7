import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import { AddProductionComponent } from './add-production/add-production.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRawMaterialComponent } from './add-raw-material/add-raw-material.component';


const routes: Routes = [
  {
    path: '',
    component: ProductionComponent
  },
  {
    path: 'dashboard',
    component: ProductionComponent
  },
  {
    path: 'add-production',
    component: AddProductionComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'add-raw-material',
    component: AddRawMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
