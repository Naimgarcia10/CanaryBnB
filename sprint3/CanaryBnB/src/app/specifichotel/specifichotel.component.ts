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

  userEmail: string | null = localStorage.getItem('user_email');
 

  constructor(private hotelService: HotelService, private router: Router, private reservationService: ReservationService) {} // Inyecta Router aquí

  ngOnInit(): void {

    const selectedHotel = this.hotelService.getSelectedHotel();
    if (selectedHotel) {
      this.hotel = selectedHotel;
    } else {
      alert('No se encontró información del hotel seleccionado.');
    }
  }

  updateSpecificHotelData() {
    localStorage.setItem('hotel_name', this.hotel?.name || '');
    localStorage.setItem('hotel_images', JSON.stringify(this.hotel?.images || []));

}

irAPasarelaDePago(){

  if (!this.userEmail || this.userEmail === '' || this.userEmail=== 'undefined' || this.userEmail=== 'null' ) {
    alert('No se puede realizar una reserva sin haber iniciado sesión previamente, por favor inicie sesión.');
    return;
  }

  this.router.navigate(['/payment-gateway']);
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
