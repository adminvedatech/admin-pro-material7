import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CostsService } from 'src/app/costs/costs.service';
import { Cost } from 'src/app/costs/cost.model';
import { BankService } from '../bank.service';
import { Bank } from '../model/model';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

export interface Food {
  value: string;
  viewValue: string;
}

// export interface Cost {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-add-check',
  templateUrl: './add-check.component.html',
  styleUrls: ['./add-check.component.scss']
})
export class AddCheckComponent implements OnInit {
  
  selectedValue: string;
  check = {
    id: '',
    nameBank: '',
    initialDate: '',
    paymentDate: '',
    checkNumber: '',
    paymentTo: '',
    checkValue: '',
    department: '',
    costType: '',
  }

  foods: Food[] = [
    {value: 'Gasto de Administracion', viewValue: 'Gasto Administracion'},
    {value: 'pizza-1', viewValue: 'Gasto Fabricacion'},
    {value: 'tacos-2', viewValue: 'Gasto de Venta'}
  ];

  costs: Cost[] = [];
  banks: Bank[]  = [];

  // costs: Cost[] = [
  //   {value: 'steak-0', viewValue: 'Gasolina'},
  //   {value: 'pizza-1', viewValue: 'Electricidad'},
  //   {value: 'tacos-2', viewValue: 'Gas'},
  //   {value: 'tacos-2', viewValue: 'Agua'},
  //   {value: 'tacos-2', viewValue: 'Nomina'}


  // ];
 
  private form : FormGroup;
  constructor(private f: FormBuilder,
              private costservice: CostsService,
              private bankservice: BankService,
              private snackbar: SnackbarService) 
              {
                
                }
  
  ngOnInit() {
    this.form = this.f.group({
      nameBank: new FormControl({
        // id: new FormControl(),
        // name: new FormControl()
      }),
             id: [''],
    initialDate: [''],
    paymentDate: [''],
    checkNumber: [''],
      paymentTo: [''],
     checkValue: [''],
     department: [''],
       costType: ['']

    });
    this.getAllBankAccounts();
    this.getCosts();
  }

  onSubmit() {
    console.log('FORME ', this.form.value);
    this.bankservice.createCheck(this.form.value).subscribe( res=> {
        console.log('RESULT', res);
        this.cleanForm();
    })
    
  }

  getCosts() {
    this.costservice.getAllCost().subscribe( res => {
      this.costs = res;

    })
  }

  getAllBankAccounts() {
    this.bankservice.getAllBankAccount().subscribe(res => {
      console.log('BANKS ', this.banks);
      
        this.banks = res;
    })
  }

  cleanForm() {
    this.form.setValue(this.check);
   // this.router.navigate(['/banks/dashboard']);
    this.snackbar.success('Se Agrego el cheque correctamente');
   
  }

}
