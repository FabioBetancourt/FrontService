import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'https://shark-app-nufoo.ondigitalocean.app/api/orders';

  constructor(private http: HttpClient) {}

  getFoods(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
