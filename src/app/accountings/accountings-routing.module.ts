import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingsComponent } from './accountings.component';
import { AddAccountingComponent } from './add-accounting/add-accounting.component';
import { AddPolicyAccountComponent } from './add-policy-account/add-policy-account.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AccountingsComponent
  },
  {
    path: 'add-accounting-account',
    component: AddAccountingComponent
  },
  {
    path: 'add-policy-accounting',
    component: AddPolicyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingsRoutingModule { }
