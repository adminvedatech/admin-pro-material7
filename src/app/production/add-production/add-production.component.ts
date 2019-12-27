import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { Product, RawMaterial, Raws } from "../product.model";
import { ProductionService } from "../production.service";
import { SnackbarService } from 'src/app/snackbar/snackbar.service';
export class Raw {
  quantity: number;
  material: string;
  costo: number;
  total: number;
}
@Component({
  selector: "app-add-production",
  templateUrl: "./add-production.component.html",
  styleUrls: ["./add-production.component.scss"]
})
export class AddProductionComponent implements OnInit {
  products: Product[] = [];
  rawMaterials: RawMaterial[] = [];
  private form: FormGroup;
  private rawmaterials: FormArray;
  totalCosto: number = 0;
  totalpzas: number = 0;

  raw: Raw[] = [];

  private Raw = {
    quantity: "",
    material: "",
    costo: "",
    total: ""
  };

  constructor(
    private fb: FormBuilder,
    private productionservice: ProductionService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      productName: new FormControl("", [Validators.required]),
      initialDate: ["", [Validators.required]],
      finalDate: [""],
      productionNumber: [""],
      observations: [""],
      quantity: ["", [Validators.required]],
      cost: [""],
      totalCost: [""],
      materials: this.fb.array([])
    });

    // this.createRawMaterials()

    this.getAllProducts();
    this.getAllRawMaterial();
    console.log("FORM INITIAL ", this.form);
   // this.addMaterials();
  }

  createRawMaterials(): FormGroup {
    return this.fb.group({
      id: [''],
      quantity: [''],
      rawmaterial:[''],
      unitCost: [''],
      total: ['']
    })
  }

  get materials(): FormArray {
    return this.form.get("materials") as FormArray;
  }

  newMaterials(): FormGroup {
    return this.fb.group({
      quantity: 0,
      material: "",
      costo: "",
      total: ""
    });
  }

  addMaterials() {
    this.materials.push(this.createRawMaterials());
  }

  removeMaterials(id: number) {
    // this.materials.removeAt(id);
    // var arrayControl = this.form.get("materials") as FormArray;
    // for (var i = 0; i < arrayControl.length; i++) {
    //   this.raw[i] = <Raw>arrayControl.controls[i].value;
    // }
    // this.itemsCalculation(arrayControl);
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
  }

  getAllProducts() {
    this.productionservice.getAllProducts().subscribe(res => {
      this.products = res;
      console.log("PRODUCTS ", this.products);
    });
  }

  getAllRawMaterial() {
    this.productionservice.getAllRawMaterials().subscribe(res => {
      this.rawMaterials = res;
    });
  }

  selectedItem(event, data, id) {
    var cant = 10;
    var arrayControl = this.form.get("materials") as FormArray;
      console.log('FORM MATERIALS RAWMATERIAL ', this.form.controls);
      console.log('FORM ', this.form.controls.materials.value[id].rawmaterial);
      console.log('FORM ', this.form.controls.materials.value[id].quantity);

      console.log('FORM ', data);
      console.log('QUANTITY ', arrayControl.controls[id].value.quantity);
      
      if(arrayControl.controls[id].value.quantity > 0) {
        console.log('FORM ARRAY ', arrayControl.controls[id].value.rawmaterial);
       arrayControl.controls[id].get('unitCost').setValue(data.unitCost);
        arrayControl.controls[id].get('total').setValue(arrayControl.controls[id].value.quantity * 
          arrayControl.controls[id].value.unitCost);

        // console.log('FORM ARRAY SET VALUE ', arrayControl.controls[id].get('quantity').setValue(2));
      }else {
        
        this.snackbar.fail('Agregar la cantidad utilizada de materia prima ');
        arrayControl.controls[id].get('rawmaterial').setValue('');
      }
     
    //  this.raw[id] = <Raw>arrayControl.controls[id].value;
    //  this.raw[id].costo = data.unitCost;
    //  this.raw[id].total = this.raw[id].quantity * this.raw[id].costo;
    //  arrayControl.controls[id].setValue(this.raw[id]);

     this.itemsCalculation();
  }

  inputChange(event: any, id) {

   
console.log('I ',id);
var arrayControl = this.form.get("materials") as FormArray;
if(arrayControl.controls[id].value.unitCost > 0 ) {
  
        arrayControl.controls[id].get('total').setValue(arrayControl.controls[id].value.quantity * 
          arrayControl.controls[id].value.unitCost);
          this.itemsCalculation();
} 
    // var arrayControl = this.form.get("materials") as FormArray;
    // // arrayControl.controls[id].get('rawmaterial').setValue('');
    // // console.log("EVENT INPUT ", event);
    // // var arrayControl = this.form.get("materials") as FormArray;
    // this.form.get('materials').valueChanges.subscribe(res => {
    //   console.log('RESULT ', res);
    //   this.raw = res;
      
    // //  this.itemsCalculation(this.raw);
      
    // });
    
   
   
  }

  recalculateCost() {
    var arrayControl = this.form.get("materials") as FormArray;
    if (arrayControl.length > 0) {
      this.itemsCalculation();
    }
  }

  itemsCalculation() {
    console.log('FORM ', this.form.controls.materials.value);
    var arrayControl = this.form.get("materials") as FormArray;
    if( this.form.get("quantity").value !== 0) {

      this.totalCosto = 0;
      for (var i = 0; i < arrayControl.length; i++) {
        
        this.totalCosto = this.totalCosto + arrayControl.controls[i].value.total;
        
      }
      this.totalpzas = this.form.get("quantity").value;
      this.form.get("totalCost").setValue(this.totalCosto);
      this.form.get("cost").setValue(this.totalCosto / this.totalpzas);
    } else {
      this.snackbar.warn('Agrege la Cantidad a producir');
    }
  } 
  
}
