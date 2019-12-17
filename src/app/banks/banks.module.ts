import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { AddCheckComponent } from './add-check/add-check.component';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
import { AddBankTransferComponent } from './add-bank-transfer/add-bank-transfer.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableDataSource, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [BanksComponent, AddBankAccountComponent, AddCheckComponent, AddDepositComponent, AddBankTransferComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialDesignModule,
    // MatTableDataSource,
    ReactiveFormsModule,
    BanksRoutingModule,
    ChartsModule
  ]
})
export class BanksModule { }
