import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  getTopRatedHotels(): Observable<any[]> {
    return this.getHotelsData().pipe(
      map(data => {
        const allHotels = [...data['Gran Canaria'], ...data['Tenerife']];
        const sortedHotels = allHotels.sort((a, b) => b.rating - a.rating);
        return sortedHotels.slice(0, 3);
      })
    );
  }


}
