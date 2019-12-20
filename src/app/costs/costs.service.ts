import { Injectable } from '@angular/core';
import { Cost } from './cost.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  URL_SERVICIOS_FIRE = 'https://bank-mgr.firebaseio.com/'


  constructor(private http: HttpClient) { }

  createCost(cost: Cost) {
    
    // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.post(
          // URL_SERVICIOS +
          this.URL_SERVICIOS_FIRE +
          'costos.json',
          // '/api/bank/addBankAccount',
           cost,
          //  {headers: this.httpHeaders}
            ).pipe(
              map( (resp: any) => {
                  cost.id = resp.name;
                  return cost;
              })
            )
          
          
    }
  
    getAllCost() {
      
      // this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        // url += '?token=' + this.token;
        return this.http.get(
            // URL_SERVICIOS +
            this.URL_SERVICIOS_FIRE +
            'costos.json',
            // '/api/bank/addBankAccount',
            
            //  {headers: this.httpHeaders}
              ).pipe(
                map( (resp: any) => this.crearObjeto(resp)   
                )
              )
      }
  
      crearObjeto(objeto: object ) {
        const costs: Cost[]=[];
        if(objeto===null){return [];}
        Object.keys(objeto).forEach( key => {
          const cost: Cost = objeto[key];
          cost.id = key;
          costs.push(cost);
        })
          return costs;
      }
     
}
