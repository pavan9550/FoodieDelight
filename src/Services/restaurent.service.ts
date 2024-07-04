import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

  private apiUrl = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRestaurantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, restaurant);
  }

  updateRestaurant(restaurant: any): Observable<any> {
    console.log(`put Request Data : ${JSON.stringify(restaurant)}`)
    return this.http.put<any>(`${this.apiUrl}/${restaurant.id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}




























