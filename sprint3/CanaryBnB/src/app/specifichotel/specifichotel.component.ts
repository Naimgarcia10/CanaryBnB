import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Añade esto
import { HotelService, Hotel } from '../hotel.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-specifichotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {

  hotel: Hotel | null = null;
  currentImageIndex: number = 0;
  reservationId: string= ''; // Agrega esta línea

  constructor(private hotelService: HotelService, private router: Router, private reservationService: ReservationService) {} // Inyecta Router aquí

  ngOnInit(): void {
    this.reservationId = localStorage.getItem('reservation_id') || ''; // Recupera el ID de la reserva desde el almacenamiento local
    const selectedHotel = this.hotelService.getSelectedHotel();
    if (selectedHotel) {
      this.hotel = selectedHotel;
    } else {
      alert('No se encontró información del hotel seleccionado.');
    }
  }

  updateSpecificHotelData() {
  const reservationData = {
    hotel_name: this.hotel?.name,
    hotel_image: this.hotel?.images[0],
  };

  this.reservationService.updateReservation(this.reservationId, reservationData).then(() => {
    // Navega a la página siguiente o muestra un mensaje de éxito
    console.log('Datos en specificHotel actualizados', reservationData);
  });
}




  prevImage(): void {
    if (this.hotel && this.currentImageIndex > 0) { // Añadido chequeo de this.hotel
      this.currentImageIndex--;
    } else if (this.hotel) {
      this.currentImageIndex = this.hotel.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.hotel && this.currentImageIndex < this.hotel.images.length - 1) { // Añadido chequeo de this.hotel
      this.currentImageIndex++;
    } else if (this.hotel) {
      this.currentImageIndex = 0;
    }
  }
}
