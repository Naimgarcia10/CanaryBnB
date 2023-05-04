import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  constructor(private reservationService: ReservationService,  private router: Router) {}
 
  ngOnInit(): void {
  }

  goToReservationHistorial() {
    this.router.navigate(['/reservation-historial']); // Asume que tienes una ruta configurada para "reservationHistorial"
  }



}