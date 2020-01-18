import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { BanksComponent } from './banks/banks.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { TestPageComponent } from './test-page/test-page.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CostsComponent } from './costs/costs.component';
import { AddCostsComponent } from './costs/add-costs/add-costs.component';
import { MenuComponent } from './menu/menu.component';
import { ProductionComponent } from './production/production.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AccountingsComponent } from './accountings/accountings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestPageComponent,
    RegisterComponent,
    SidenavComponent,
    MenuComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
