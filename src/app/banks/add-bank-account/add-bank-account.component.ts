import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-bank-account',
  templateUrl: './add-bank-account.component.html',
  styleUrls: ['./add-bank-account.component.scss']
})
export class AddBankAccountComponent implements OnInit {

  
  private form : FormGroup;
  constructor(private f: FormBuilder) { }
  
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
    
  }

}
