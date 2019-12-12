import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {

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
