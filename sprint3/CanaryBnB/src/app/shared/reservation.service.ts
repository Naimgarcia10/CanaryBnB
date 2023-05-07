import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private firestore: AngularFirestore) { }

  createEmptyReservation(userEmail: string, checkin: string, checkout: string, people: string, hotel_name: string, hotel_image: string) {
    const reservationId = this.firestore.createId(); // Genera un ID único para la reserva
    const reservationData = {
      user_email: userEmail,
      reservation_id: reservationId,
      checkin: checkin,
      checkout: checkout,
      people: people,
      hotel_name: hotel_name,
      hotel_image: hotel_image
    };
  
    // Retorna el ID de la reserva junto con la promesa
    return this.firestore.collection('reservas').doc(reservationId).set(reservationData).then(() => reservationId);
  }
  

  addReservation(data: any) {
    return this.firestore.collection('reservas').add(data);
  }
  
  getReservationById(reservationId: string) {
    return this.firestore.collection('reservas').doc(reservationId).get();
  }
  
  updateReservation(reservationId: string, data: any) {
    return this.firestore.collection('reservas').doc(reservationId).update(data);
  }

  getUserReservations(userEmail: string) {
    console.log('Email del usuario', userEmail);
    return this.firestore.collection('reservas', ref => ref.where('user_email', '==', userEmail)).snapshotChanges();
    
  }
  
  


}
