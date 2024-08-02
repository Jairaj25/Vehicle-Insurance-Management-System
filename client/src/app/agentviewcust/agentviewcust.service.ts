import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICust } from './cust';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentviewcustService {

  private baseApiUrl = 'https://localhost:44357/api/Cust/';

  constructor(private httpClient: HttpClient) { }
    getcust(): Observable<ICust[]> {

      return this.httpClient.get<ICust[]>(this.baseApiUrl);

    }
}
