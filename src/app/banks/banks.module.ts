import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksComponent } from './banks.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BanksComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    BanksRoutingModule
  ]
})
export class BanksModule { }
