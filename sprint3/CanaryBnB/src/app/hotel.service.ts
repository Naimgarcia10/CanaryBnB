import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface Hotel {
  address: string;
  description: string;
  destination: string;
  freeCancellation: boolean;
  images: string[];
  name: string;
  numBathrooms: number;
  numBeds: number;
  numRooms: number;
  price: number;
  rating: number;
  services: string[];
  type: string;
}
=======
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5

@Injectable({
  providedIn: 'root'
})
export class HotelService {
<<<<<<< HEAD
  private foundHotels: Hotel[] = [];
  hotelFilter$: any; // Añade esta línea
  constructor(private firestore: AngularFirestore) { }

  getHotelsData(): Observable<Hotel[]> {
    return this.firestore.collection<Hotel>('Hoteles').valueChanges({ idField: 'id' });
  }

  getTopRatedHotels(): Observable<Hotel[]> {
    return this.getHotelsData().pipe(
      map((data: Hotel[]) => {
        const sortedHotels = data.sort((a: Hotel, b: Hotel) => b.rating - a.rating);
        return sortedHotels.slice(0, 3);
      })
    );
  }

  // Añade esto en HotelService
  getHotelsByLocation(location: string): Observable<Hotel[]> {
    return this.firestore
      .collection<Hotel>('Hoteles', ref => ref.where('destination', '==', location))
      .valueChanges({ idField: 'id' });
  }

  setFoundHotels(hotels: Hotel[]): void {
    this.foundHotels = hotels;
  }

  getFoundHotels(): Hotel[] {
    return this.foundHotels;
  }
=======
  private hotelsDataUrl = 'assets/hoteles.json';
  hotelFilter$: any;

  constructor(private http: HttpClient) { }

  getHotelsData(): Observable<any> {
    return this.http.get<any>(this.hotelsDataUrl);
  }

  // hotel.service.ts
getTopRatedHotels(): Observable<any[]> {
  return this.getHotelsData().pipe(
    map(data => {
      const allDestinations = Object.keys(data);
      const allHotels = allDestinations.flatMap(destination => data[destination]);
      const sortedHotels = allHotels.sort((a, b) => b.rating - a.rating);
      return sortedHotels.slice(0, 3);
    })
  );
}


>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5

}
