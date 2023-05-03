import { Component, OnInit} from '@angular/core';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-historial',
  templateUrl: './reservation-historial.component.html',
  styleUrls: ['./reservation-historial.component.css']
})
export class ReservationHistorialComponent implements OnInit {
  confirmedReservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
  }
}
