import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'banks',
  // component: BanksComponent
  loadChildren: () => import('./banks/banks.module').then(m => m.BanksModule),
   canActivate: [AuthGuard] 
  },
  { path: 'costs',
  // component: BanksComponent
  loadChildren: () => import('./costs/costs.module').then(m => m.CostsModule),
   canActivate: [AuthGuard] 
  },
  { path: 'customers',
  // component: BanksComponent
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  //  canActivate: [AuthGuard] 
  },
  { path: 'suppliers',
  // component: BanksComponent
  loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule),
  //  canActivate: [AuthGuard] 
  },
  { path: 'accountings',
  // component: BanksComponent
  loadChildren: () => import('./accountings/accountings.module').then(m => m.AccountingsModule),
  //  canActivate: [AuthGuard] 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'production',
    loadChildren: () => import('./production/production.module').then(m => m.ProductionModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
