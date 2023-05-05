import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  constructor(private reservationService: ReservationService,  private router: Router) {}

  pago = {
    titular: '',
    numero: '',
    fechaCaducidad: '',
    cvv: ''
  };
 
  ngOnInit(): void {
  }

  procesarPago() {
    // Aquí puedes llamar a un servicio que se comunique con una API de pagos
    console.log('Pago procesado:', this.pago);
  }

  goToHome() {
    this.router.navigate(['/']); // Asume que tienes una ruta configurada para "reservationHistorial"
  }



}