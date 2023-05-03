import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class HotelService {
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

}
