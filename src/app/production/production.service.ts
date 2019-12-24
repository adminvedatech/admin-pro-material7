import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product, RawMaterial } from "./product.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductionService {
  URL_SERVICIOS_FIRE = "https://bank-mgr.firebaseio.com/";

  constructor(private http: HttpClient) {}

  createProduct(product: Product) {
    console.log("PRODUCT ", product);

    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http
      .post(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE + "product.json",
        // '/api/bank/addBankAccount',
        product
        //  {headers: this.httpHeaders}
      )
      .pipe(
        map((resp: any) => {
          product.id = resp.name;
          return product;
        })
      );
  }

  createRawMateri(product: RawMaterial) {
    console.log("PRODUCT ", product);

    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http
      .post(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE + "rawmaterial.json",
        // '/api/bank/addBankAccount',
        product
        //  {headers: this.httpHeaders}
      )
      .pipe(
        map((resp: any) => {
          product.id = resp.name;
          return product;
        })
      );
  }


  getAllProducts() {
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http
      .get(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE + "product.json"
        // '/api/bank/addBankAccount',

        //  {headers: this.httpHeaders}
      )
      .pipe(map((resp: any) => this.crearObjeto(resp)));
  }

  getAllRawMaterials() {
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http
      .get(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE + "rawmaterial.json"
        // '/api/bank/addBankAccount',

        //  {headers: this.httpHeaders}
      )
      .pipe(map((resp: any) => this.crearObjeto(resp)));
  }

  crearObjeto(objeto: object) {
    const products: any[] = [];
    if (objeto === null) {
      return [];
    }
    Object.keys(objeto).forEach(key => {
      const product: any = objeto[key];
      product.id = key;
      products.push(product);
    });
    return products;
  }
}
