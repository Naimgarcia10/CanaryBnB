import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Hotel {
  id?: string;
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
  private selectedHotel: Hotel | null = null;
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
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Hotel;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  setFoundHotels(hotels: Hotel[]): void {
    this.foundHotels = hotels;
    localStorage.setItem('foundHotels', JSON.stringify(hotels)); // Añade esta línea
  }

  getFoundHotels(): Hotel[] {
    if (this.foundHotels.length === 0) {
      const storedHotels = localStorage.getItem('foundHotels');
      if (storedHotels) {
        this.foundHotels = JSON.parse(storedHotels) as Hotel[];
      }
    }
    return this.foundHotels;
  }

  getHotelById(id: string): Observable<Hotel | undefined> {
    return this.firestore
      .collection<Hotel>('Hoteles')
      .doc(id)
      .valueChanges()
      .pipe(map((data: any) => (data ? { id, ...data } as Hotel : undefined)));
  }

  setSelectedHotel(hotel: Hotel): void {
    this.selectedHotel = hotel;
  }
  
  getSelectedHotel(): Hotel | null {
    return this.selectedHotel;
  }
  
  

}
