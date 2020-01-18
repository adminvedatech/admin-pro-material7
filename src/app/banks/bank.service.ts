import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../guard/usuario.model';
import { Bank, Check } from './model/model';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

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

  createCheck(check: Check) {
    console.log('CHECK ', check);
    
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.post(
          // URL_SERVICIOS +
          this.URL_SERVICIOS_FIRE +
          'check.json',
          // '/api/bank/addBankAccount',
           check,
          //  {headers: this.httpHeaders}
            ).pipe(
              map( (resp: any) => {
                  check.id = resp.name;
                  return check;
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

    getAllCheck(idCheck) {
    
      // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        // url += '?token=' + this.token;
        return this.http.get(
            // URL_SERVICIOS +
            this.URL_SERVICIOS_FIRE +
            'check.json',
            // '/api/bank/addBankAccount',
            
            //  {headers: this.httpHeaders}
              ).pipe(
           //   map( (resp: any) =>   this.crearObjetoCheck(resp) )
                filter((res: Check) => res.id = idCheck)
              );
             
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

    crearObjetoCheck(objeto: object ) {
      const banks: Check[]=[];
      if(objeto===null){return [];}
      Object.keys(objeto).forEach( key => {
        const bank: Check = objeto[key];
        bank.id = key;
        banks.push(bank);
      })
        return banks;
    }
  

}
