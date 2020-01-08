import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers.module';
import { CustomersComponent } from './customers.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'add-invoice',
    component: AddInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
