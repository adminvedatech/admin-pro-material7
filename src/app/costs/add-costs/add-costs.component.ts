import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CostsService } from '../costs.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
// import { Cost } from 'src/app/banks/add-check/add-check.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-costs',
  templateUrl: './add-costs.component.html',
  styleUrls: ['./add-costs.component.scss']
})
export class AddCostsComponent implements OnInit {

   cost =  {
   id: '',
   nameCost : ''
  }
  public form: FormGroup;

  constructor(private f: FormBuilder,
              private costsService: CostsService,
              private snackbarservice: SnackbarService,
              private router: Router) { }

  ngOnInit() {

    this.form = this.f.group({
      id: [''],
      nameCost: [''],
    
    })

  }

  onSubmit() {
    console.log('FORME ', this.form.value);
    this.costsService.createCost(this.form.value).subscribe(data =>  {
      console.log('data received ', data);
      
        this.snackbarservice.success('una nueva cuenta fue creada con exito');
         this.cleanForm(); 
    });
       
    
  }

  cleanForm() {
    this.form.setValue(this.cost);
    this.router.navigate(['/costs/dashboard']);
    
  }


}
