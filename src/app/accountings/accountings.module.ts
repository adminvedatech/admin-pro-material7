import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingsRoutingModule } from './accountings-routing.module';
import { AddAccountingComponent } from './add-accounting/add-accounting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { AccountingsComponent } from './accountings.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ChartsModule } from 'ng2-charts';
import { AddPolicyAccountComponent } from './add-policy-account/add-policy-account.component';

export var options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [AccountingsComponent, AddAccountingComponent, AddPolicyAccountComponent],
  imports: [
    CommonModule,
    AccountingsRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    ChartsModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class AccountingsModule { }
