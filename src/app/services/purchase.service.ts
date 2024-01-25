import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {


  private apiUrl = 'https://orca-app-ubmtb.ondigitalocean.app/api/purchases-market';

  constructor(private http: HttpClient) { }

  getPurchases(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
