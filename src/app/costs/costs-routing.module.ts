import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostsComponent } from './costs.component';
import { AddCostsComponent } from './add-costs/add-costs.component';


const routes: Routes = [

  {path: '',
   component: CostsComponent 
  },
  {path: 'add-costs',
   component: AddCostsComponent 
  },
  {path: 'dashboard',
  component: CostsComponent 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
