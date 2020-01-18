import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks.component';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { AddBankTransferComponent } from './add-bank-transfer/add-bank-transfer.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
import { GetChecksComponent } from './get-checks/get-checks.component';


const routes: Routes = [
  {path: 'dashboard',
   component: BanksComponent
  },
  {path: 'add-account',
   component: AddBankAccountComponent
  },
  {path: 'add-bank-transfer',
  component: AddBankTransferComponent
  },
  {path: 'add-check',
  component: AddCheckComponent
  },
  {path: 'add-deposit',
  component: AddDepositComponent
  },
  {path: 'get-checks',
  component: GetChecksComponent
  },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }
