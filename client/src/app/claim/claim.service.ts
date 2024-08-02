import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { addclaims } from './addclaim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private baseApiUrl = 'https://localhost:44357/api/';

  constructor(private httpClient: HttpClient) { }
    addclaimss(cla : addclaims):any {
      console.log(cla);
      return this.httpClient.post(this.baseApiUrl+"claims", cla);
    }}
