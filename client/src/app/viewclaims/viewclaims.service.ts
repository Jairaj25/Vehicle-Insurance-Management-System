import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViewclaimsService {

  private baseApiUrl = 'https://localhost:44357/api';

  constructor(private httpClient: HttpClient) { }
    getclaim(claimid:number) {

      return this.httpClient.get<any>(this.baseApiUrl + "/claims/"+claimid);

    }
}
