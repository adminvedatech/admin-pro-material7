import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { ProductsComponent } from './products/products.component';
import { AddProductionComponent } from './add-production/add-production.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AddRawMaterialComponent } from './add-raw-material/add-raw-material.component';
import { AddRawMaterialItemComponent } from './add-raw-material-item/add-raw-material-item.component';


@NgModule({
  declarations: [ProductionComponent, ProductsComponent, AddProductionComponent, AddProductComponent, AddRawMaterialComponent, AddRawMaterialItemComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    ProductionRoutingModule,
    ChartsModule
  ]
})
export class ProductionModule { }
