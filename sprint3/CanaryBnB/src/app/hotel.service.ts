import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelsDataUrl = 'assets/hoteles.json';
  hotelFilter$: any;

  constructor(private http: HttpClient) { }

  getHotelsData(): Observable<any> {
    return this.http.get<any>(this.hotelsDataUrl);
  }
}
