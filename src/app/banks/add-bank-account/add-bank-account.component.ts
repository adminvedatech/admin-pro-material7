import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BankService } from '../bank.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.scss']
})
export class AddBankAccountComponent implements OnInit {

  bank = {
    'id': '',
    nameBank: '',
    accountNumber: '',
    phone: '',
    email: '',
    balance: '',
    balanceToday: ''

  }
  
  private form : FormGroup;
  constructor(private f: FormBuilder,
              private bankservice: BankService,
              private snacbarservice: SnackbarService,
              private router: Router) { }
  
  ngOnInit() {
    this.form = this.f.group({
      id: [''],
      nameBank: [''],
    accountNumber: [''],
    phone: [''],
    email: [''],
    balance: [''],
    balanceToday: ['']

    })
  }

  onSubmit() {
    console.log('FORME ', this.form.value);
    this.bankservice.createBankAccount(this.form.value).subscribe(data =>  {
      console.log('data received ', data);
      
        this.snacbarservice.success('una nueva cuenta fue creada con exito');
         this.cleanForm(); 
    });
       
    
  }

  cleanForm() {
    this.form.setValue(this.bank);
    this.router.navigate(['/banks/dashboard']);
    
  }

}
