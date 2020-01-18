import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-supplier-invoice',
  templateUrl: './add-supplier-invoice.component.html',
  styleUrls: ['./add-supplier-invoice.component.scss']
})
export class AddSupplierInvoiceComponent implements OnInit {

  progress: { percentage: number } = { percentage: 0 };
  selectedFile: File = null;
  name: string = 'Nombre del Archivo a ser enviado';
  constructor() { }

  ngOnInit() {
  }

   /*----------- Selecciona Archivo AccountType en formato XML para ser Enviado -------------*/
   onFileSelected(event) {
    this.progress.percentage = 0;
    this.selectedFile = <File>event.target.files[0];
    try {
      this.name = this.selectedFile.name;
      console.log(this.selectedFile.name.split('.'));
      if ( this.name.split('.')[1] !== 'xml') {
        console.log('ERROR!');
        this.cancelFile();
      // swal('Error!', 'Cancelar y seleccionar un archivo con formato XML', 'warning');

      } else {
        console.log('go ahead');

      }
    } catch (error) {
      console.log(error);
      this.cancelFile();
      // swal('Error!', 'Cancelar y seleccionar un archivo nuevo!', 'warning');
    }
}

/*----------- Cancela enviar Archivo -------------*/
cancelFile() {
  this.selectedFile = null;
  this.name = null;
  console.log('Cancel File', this.selectedFile);
}


}
