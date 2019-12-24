import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-raw-material-item',
  templateUrl: './add-raw-material-item.component.html',
  styleUrls: ['./add-raw-material-item.component.scss']
})
export class AddRawMaterialItemComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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

}
