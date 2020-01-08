import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomersComponent, AddInvoiceComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ]
})
export class CustomersModule { }
