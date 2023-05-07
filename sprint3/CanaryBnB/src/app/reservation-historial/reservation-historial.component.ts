import { Component, OnInit} from '@angular/core';
import { ReservationService } from '../shared/reservation.service';

@Component({
  selector: 'app-reservation-historial',
  templateUrl: './reservation-historial.component.html',
  styleUrls: ['./reservation-historial.component.css']
})
export class ReservationHistorialComponent implements OnInit {
  userEmail: string= '';
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('user_email') || ''; // Asume que has guardado el correo electrónico del usuario en el almacenamiento local
    this.reservationService.getUserReservations(this.userEmail).subscribe((reservationsSnapshot) => {
      console.log('Correo electrónico del usuario:', this.userEmail);

      this.reservations = reservationsSnapshot.map((reservation) => {
        const data = reservation.payload.doc.data();
        const id = reservation.payload.doc.id;
        console.log('Datos de las reservas recibidos de Firebase:', reservationsSnapshot);
        console.log('Reservas procesadas:', this.reservations);

        return { id, data };
      });
      // Ahora puedes utilizar la variable reservations para mostrar el historial en la plantilla del componente
    });
  }
  


}
