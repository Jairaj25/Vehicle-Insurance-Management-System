import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addcustreq } from './addcust.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private baseApiUrl = 'https://localhost:44357/api/Cust';

  constructor(private httpClient: HttpClient) { }
    addcust(cus : addcustreq):any {
      console.log(cus);
      return this.httpClient.post(this.baseApiUrl, cus);
    }

}
