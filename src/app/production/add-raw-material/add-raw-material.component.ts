import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RawMaterial } from '../product.model';
import { ProductionService } from '../production.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-raw-material',
  templateUrl: './add-raw-material.component.html',
  styleUrls: ['./add-raw-material.component.scss']
})
export class AddRawMaterialComponent implements OnInit {

  private product: RawMaterial;
  private form: FormGroup;
  private rawMaterial: RawMaterial;

  private productClean = {

    id: '',
    nameRawMaterial: '',
    codeBar: '',
    description: '',
    unitCost: ''
  }

  constructor(private f : FormBuilder,
      private productionservice: ProductionService,
      private route: Router) { }

  ngOnInit() {
    this.form = this.f.group({
      id: [''],
      nameRawMaterial: [''],
    codeBar: [''],
    description: [''],
    unitCost: ['']
  
    })
  }

  onSubmit() {
    this.productionservice.createRawMateri(this.form.value).subscribe( result=> {
        this.product = result;
        console.log('PRODUCTO ', this.product);
        this.onClear();
    })
  }

  onClear() {
    this.form.setValue(this.productClean);
    this.route.navigate(['/production/dashboard'])
  }


}
