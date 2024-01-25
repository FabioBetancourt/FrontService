import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'https://orca-app-ubmtb.ondigitalocean.app/api/ingredients';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
