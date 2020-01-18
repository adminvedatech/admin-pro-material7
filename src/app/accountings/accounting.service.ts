import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounting } from './models/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  URL_SERVICIOS_FIRE = 'https://bank-mgr.firebaseio.com/'

  constructor(private http: HttpClient) { }
  
  createAccounting(accounting: Accounting) {
    console.log('BANK ', accounting);
    
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.post(
          // URL_SERVICIOS +
          this.URL_SERVICIOS_FIRE +
          'accounting.json',
          // '/api/bank/addBankAccount',
           accounting,
          //  {headers: this.httpHeaders}
            ).pipe(
              map( (resp: any) => {
                  accounting.id = resp.name;
                  return accounting;
              })
            )
          
          
    }
  
    getAllAccountings() {
      
      // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        // url += '?token=' + this.token;
        return this.http.get(
            // URL_SERVICIOS +
            this.URL_SERVICIOS_FIRE +
            'accounting.json',
            // '/api/bank/addBankAccount',
            
            //  {headers: this.httpHeaders}
              ).pipe(
                map( (resp: any) => this.crearObjeto(resp)   
                )
              )
      }
  
      crearObjeto(objeto: object ) {
        const accountings: Accounting[]=[];
        if(objeto===null){return [];}
        Object.keys(objeto).forEach( key => {
          const accounting: Accounting = objeto[key];
          accounting.id = key;
          accountings.push(accounting);
        })
          return accountings;
      }
    
}
