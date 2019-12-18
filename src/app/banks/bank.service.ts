import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../guard/usuario.model';
import { Bank } from './model/model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

URL_SERVICIOS_FIRE = 'https://bank-mgr.firebaseio.com/'
constructor(private http: HttpClient) { }

createBankAccount(object: Bank): Observable<Bank[]> {
  console.log('BANK ', object);
  
  // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // url += '?token=' + this.token;
    return this.http.post<Bank[]>(
        // URL_SERVICIOS +
        this.URL_SERVICIOS_FIRE +
        'bancos.json',
        // '/api/bank/addBankAccount',
         object,
        //  {headers: this.httpHeaders}
          )
        .pipe(
        tap(() =>  {
          // this._refreshNeeded$.next();
        })
        );
  }


}
