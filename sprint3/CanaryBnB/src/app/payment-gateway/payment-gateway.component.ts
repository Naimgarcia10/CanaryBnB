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
 
  reservationId: string= '';
  checkIn: string= ''; 
  checkOut: string= '';
  people: string= ''; 
  userEmail:string ='';
  hotelName: string= '';
  hotelImages: string[] = [];

  ngOnInit(): void {
    this.reservationId = localStorage.getItem('reservation_id') || ''; // Recupera el ID de la reserva desde el almacenamiento local
    this.userEmail= localStorage.getItem('user_email') || '';
    this.checkIn= localStorage.getItem('checkin') || '';
    this.checkOut= localStorage.getItem('checkout') || '';
    this.people= localStorage.getItem('people') || '';
    this.hotelName = localStorage.getItem('hotel_name') || '';
    this.hotelImages = JSON.parse(localStorage.getItem('hotel_images') || '[]');

    

  }

  procesarPago() {
    // Aquí puedes llamar a un servicio que se comunique con una API de pagos
    console.log('Pago procesado:', this.pago);
  }

  goToHome() {

    this.reservationService.createEmptyReservation(this.userEmail, this.checkIn, this.checkOut, this.people, this.hotelName || '', this.hotelImages[0] || '').then((reservationId) => {
      localStorage.setItem('reservation_id', reservationId); // Guarda el ID de la reserva en el almacenamiento local
    });


    this.router.navigate(['/']); 

    alert('Reserva realizada con éxito, ¡Muchas gracias por confiar en nosotros!');
  }



}