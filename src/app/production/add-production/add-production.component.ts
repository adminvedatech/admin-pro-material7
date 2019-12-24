import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Product, RawMaterial, Raws } from '../product.model';
import { ProductionService } from '../production.service';

@Component({
  selector: 'app-add-production',
  templateUrl: './add-production.component.html',
  styleUrls: ['./add-production.component.scss']
})
export class AddProductionComponent implements OnInit {

  products: Product[]  = [];
  rawMaterials: RawMaterial[]=[];
  private form: FormGroup;
  totalCosto: number = 0;
  totalpzas: number = 0;

  private Raw = {
    // id: '',
    quantity: '',
    material: '',
    costo: '',
    total: ''
  }

  constructor(private fb: FormBuilder,
    private productionservice: ProductionService,
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      productName: new FormControl({
        // id: new FormControl(),
        // name: new FormControl()
      }),
    initialDate: [''],
    finalDate: [''],
    productionNumber: [''],
    observations: [''],
    quantity: [''],
    cost: [''],
    totalCost: [''],
    materials:this.fb.array([]),
      });

    // this.getAllBankAccounts();
    // this.getCosts();
    this.getAllProducts();
    this.getAllRawMaterial();
  }
 
get materials() : FormArray {
  return this.form.get("materials") as FormArray
}

newMaterials(): FormGroup {
  return this.fb.group({
    quantity: '',
    material: '',
    costo: '',
    total: ''
  })
}

addMaterials() {
  this.materials.push(this.newMaterials());
}

removeMaterials(i:number) {
  this.materials.removeAt(i);
}

onSubmit() {
  console.log(this.form.value);
}

getAllProducts() {
console.log('GET ALL PRODUCTS');

  this.productionservice.getAllProducts().subscribe(res => {
    
    this.products = res
    console.log('PRODUCTS ', this.products);
    
  })
}

getAllRawMaterial() {
  this.productionservice.getAllRawMaterials().subscribe(res=> {
    this.rawMaterials = res;
  })
}

// (selectChange)="selectedItem($event)" 

selectedItem(event, data, id) {

  var arrayControl = this.form.get('materials') as FormArray;

  console.log('EVENT EMMITER ', event);
  console.log('EVENT DATA ', data);
  console.log('EVENT DATA ', id);
  console.log('FORM DATA ', this.form.get('materials').value[id]);
  console.log('FORM DATA CONTROLS ', arrayControl.controls[id].value);

  var raw = {
    // id: '',
    quantity: null,
    material: '',
    costo: null,
    total: null
  }

  raw = <Raws> arrayControl.controls[id].value;
  raw.costo = data.unitCost;
  raw.total = raw.quantity*raw.costo;

  this.totalCosto = this.totalCosto + raw.total;
  this.totalpzas = this.form.get('quantity').value;
  this.form.get('totalCost').setValue(this.totalCosto);
  console.log('TOTAL COSTO ', this.totalCosto);
  this.form.get('cost').setValue(this.totalCosto/this.totalpzas);
  

  arrayControl.controls[id].setValue(raw);
  var rawMat: any = arrayControl.controls[id].value;
  console.log('RAW MAT ', rawMat.material);
  
  
}

}
