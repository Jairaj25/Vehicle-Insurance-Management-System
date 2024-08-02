import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Claimsmodel } from './Claimsmodel.model';
@Injectable({
  providedIn: 'root'
})
export class AgentviewclaimsService {

  private baseApiUrl = 'https://localhost:44357/api';

  constructor(private httpClient: HttpClient) { }
    getclaim(claimid:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/claims/"+claimid);

    }
    putClaim(claimview:Claimsmodel){
      return this.httpClient.put<any>(this.baseApiUrl+"/claims/"+claimview.claims_id,claimview);
    }
}
