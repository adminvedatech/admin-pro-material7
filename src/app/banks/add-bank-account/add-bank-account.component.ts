import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BankService } from '../bank.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.scss']
})
export class AddBankAccountComponent implements OnInit {

  
  private form : FormGroup;
  constructor(private f: FormBuilder,
              private bankservice: BankService,
              private snacbarservice: SnackbarService) { }
  
  ngOnInit() {
    this.form = this.f.group({
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
      
        this.snacbarservice.success
          
    })
    
    
  }

}
