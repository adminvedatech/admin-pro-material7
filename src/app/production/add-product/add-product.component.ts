import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductionService } from '../production.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private form: FormGroup;
  private product: Product;

  private productClean = {

    id: '',
    nameProduct: '',
    codeBar: '',
    description: ''
  }

  constructor(private f : FormBuilder,
      private productionservice: ProductionService,
      private route: Router) { }

  ngOnInit() {
    this.form = this.f.group({
      id: [''],
      nameProduct: [''],
    codeBar: [''],
    description: [''],
  
    })
  }

  onSubmit() {
    this.productionservice.createProduct(this.form.value).subscribe( result=> {
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
