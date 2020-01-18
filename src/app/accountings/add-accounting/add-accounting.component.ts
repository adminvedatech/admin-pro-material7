import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { AccountingService } from '../accounting.service';

@Component({
  selector: 'app-add-accounting',
  templateUrl: './add-accounting.component.html',
  styleUrls: ['./add-accounting.component.scss']
})
export class AddAccountingComponent implements OnInit {


  accounting = {
    id: '',
    nameAccount: '',
    accountNumber: '',
    balance: '',

  }
  
  private form : FormGroup;
  constructor(private f: FormBuilder,
              private snacbarservice: SnackbarService,
              private accountingservice: AccountingService,
              private router: Router) { }
  
  ngOnInit() {
    this.form = this.f.group({
      id: [''],
      nameAccount: [''],
    accountNumber: [''],
    balance: [''],

    })
  }

  onSubmit() {
    console.log('FORME ', this.form.value);
    this.accountingservice.createAccounting(this.form.value).subscribe(data =>  {
      console.log('data received ', data);
      
        this.snacbarservice.success('una nueva cuenta fue creada con exito');
         this.cleanForm(); 
    });
       
    
  }

  cleanForm() {
    this.form.setValue(this.accounting);
    this.router.navigate(['/accountings/dashboard']);
    
  }


}
