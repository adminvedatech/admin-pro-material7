import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { AddSupplierInvoiceComponent } from './add-supplier-invoice/add-supplier-invoice.component';
import { SuppliersComponent } from './suppliers.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SuppliersComponent, AddSupplierInvoiceComponent],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ]
})
export class SuppliersModule { }
