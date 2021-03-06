import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Cost {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.scss']
})
export class AddDepositComponent implements OnInit {

  selectedValue: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  costs: Cost[] = [
    {value: 'steak-0', viewValue: 'Gasolina'},
    {value: 'pizza-1', viewValue: 'Electricidad'},
    {value: 'tacos-2', viewValue: 'Gas'},
    {value: 'tacos-2', viewValue: 'Agua'},
    {value: 'tacos-2', viewValue: 'Nomina'}


  ];
 
  private form : FormGroup;
  constructor(private f: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.f.group({
      nameBank: [''],
  //  initialDate: [''],
    paymentDate: [''],
    transactionNumber: [''],
    customer: [''],
    depositValue: [''],
    selectedValue: [''],
    cost: ['']

    })
  }

  onSubmit() {
    console.log('FORME ', this.form.value);
    
  }

}
