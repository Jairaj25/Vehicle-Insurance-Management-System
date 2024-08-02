import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { addpol, addvehicle } from './addpolicy.model';

@Injectable({
  providedIn: 'root'
})
export class BuypolicyService {

  private baseApiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }
    addpolicy(pol : addpol):any {
      console.log(pol);
      return this.httpClient.post(this.baseApiUrl+"policy", pol);
    }


    addvehicle(veh : addvehicle):any {
      console.log(veh);
      return this.httpClient.post(this.baseApiUrl+"vehicle", veh);
    }
}
