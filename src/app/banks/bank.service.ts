import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../guard/usuario.model';
import { Bank } from './model/model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

URL_SERVICIOS_FIRE = 'https://bank-mgr.firebaseio.com/'

constructor(private http: HttpClient) { }

createBankAccount(bank: Bank) {
  console.log('BANK ', bank);
  
  // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http.post(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE +
        'bancos.json',
        // '/api/bank/addBankAccount',
         bank,
        //  {headers: this.httpHeaders}
          ).pipe(
            map( (resp: any) => {
                bank.id = resp.name;
                return bank;
            })
          )
        
        
  }

  getAllBankAccount() {
    
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.get(
          // URL_SERVICIOS +
          this.URL_SERVICIOS_FIRE +
          'bancos.json',
          // '/api/bank/addBankAccount',
          
          //  {headers: this.httpHeaders}
            ).pipe(
              map( (resp: any) => this.crearObjeto(resp)   
              )
            )
    }

    crearObjeto(objeto: object ) {
      const banks: Bank[]=[];
      if(objeto===null){return [];}
      Object.keys(objeto).forEach( key => {
        const bank: Bank = objeto[key];
        bank.id = key;
        banks.push(bank);
      })
        return banks;
    }
  

}
