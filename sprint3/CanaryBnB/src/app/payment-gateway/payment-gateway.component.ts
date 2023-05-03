import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  reservation?: Reservation;
  constructor(private reservationService: ReservationService) {}
 
  ngOnInit(): void {
  }


addReservationToHistorial(){
  if (!this.reservation) {
    // Manejar el caso en que la reserva sea undefined, por ejemplo, mostrar un mensaje de error
    console.error('Error: la reserva no está definida');
    return;
  }

  // Aquí puedes agregar la lógica para generar el número de reserva y asignarlo a la reserva actual
  this.reservation.reservationNumber = "11111111111";
  console.log('Reserva a confirmar:', this.reservation);

  // Agrega la reserva confirmada al servicio
  this.reservationService.addConfirmedReservation(this.reservation);

}



}