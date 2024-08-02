import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentviewpolicyService {

  private baseApiUrl = 'https://localhost:44357/api';

  constructor(private httpClient: HttpClient) { }
    getpolicy(policyid:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/Policy/"+policyid);

    }
    getcust(custid:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/Cust/"+custid);

    }
    getvehicle(vehicleid:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/Vehicle/"+vehicleid);

    }

}
