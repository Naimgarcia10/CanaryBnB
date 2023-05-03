import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reservation } from '../app/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private currentReservationSubject = new BehaviorSubject<Reservation | null>(null);
  currentReservation$ = this.currentReservationSubject.asObservable();

  private confirmedReservationsSubject = new BehaviorSubject<Reservation[]>([]);
  confirmedReservations$ = this.confirmedReservationsSubject.asObservable();

  constructor() {
    const storedReservation = this.getCurrentReservationFromLocalStorage();
    if (storedReservation) {
    this.currentReservationSubject.next(storedReservation);
  }

  }

  updateCurrentReservation(reservation: Reservation) {
    this.currentReservationSubject.next(reservation);
    localStorage.setItem('currentReservation', JSON.stringify(reservation));
  }
  

  addConfirmedReservation(reservation: Reservation) {
    const currentReservations = this.confirmedReservationsSubject.getValue();
    currentReservations.push(reservation);
    this.confirmedReservationsSubject.next(currentReservations);
  }

  getConfirmedReservations(): Reservation[] {
    return this.confirmedReservationsSubject.getValue();
  }

  getCurrentReservationFromLocalStorage(): Reservation {
    const storedReservation = localStorage.getItem('currentReservation');
    return storedReservation ? JSON.parse(storedReservation) : null;
  }
  
}
