import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { AddCostsComponent } from './add-costs/add-costs.component';
import { CostsComponent } from './costs.component';
import { MatTableModule } from '@angular/material';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CostsComponent,AddCostsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialDesignModule,
    // MatTableDataSource,
    ReactiveFormsModule,
    CostsRoutingModule
  ]
})
export class CostsModule { }
