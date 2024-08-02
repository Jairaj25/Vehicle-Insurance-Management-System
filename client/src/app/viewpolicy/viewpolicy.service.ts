import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewpolicyService {

  private baseApiUrl = 'https://localhost:44357/api';

  constructor(private httpClient: HttpClient) { }
    getpolicy(policynum:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/Policy/"+policynum);

    }
}
