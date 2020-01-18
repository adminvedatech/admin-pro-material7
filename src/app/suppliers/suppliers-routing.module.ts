import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';
import { AddSupplierInvoiceComponent } from './add-supplier-invoice/add-supplier-invoice.component';


const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent
  },
  {
    path: 'add-supplier-invoice',
    component: AddSupplierInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
