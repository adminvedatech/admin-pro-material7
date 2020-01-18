import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Bank } from '../model/model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-checks',
  templateUrl: './get-checks.component.html',
  styleUrls: ['./get-checks.component.scss']
})
export class GetChecksComponent implements OnInit {

  banks: Bank[] = [];
  form: FormGroup;
 
  constructor(private getchecks: BankService,
              private getbankaccount: BankService,
              private fb: FormBuilder) { }

  ngOnInit() {
    // this.getchecks.getAllCheck().subscribe(res=> {
    //   console.log('GET CHECKS ', res);
      
    // })

    this.form = this.fb.group({
      nameBank: new FormControl("", [Validators.required]),
    });


    this.getbankaccount.getAllBankAccount().subscribe(res=> {
        this.banks = res;
        console.log('BANK ', this.banks);
        
    })
    
  }

  getCheckByIdBank(id) {
    this.getchecks.getAllCheck(id).subscribe(res => {
      console.log('CHECK BY BANK ', res);
      
    })
  }

}
