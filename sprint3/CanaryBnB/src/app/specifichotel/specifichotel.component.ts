import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Añade esto
import { HotelService, Hotel } from '../hotel.service';

@Component({
  selector: 'app-specifichotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {
  hotel: Hotel | null = null;
  currentImageIndex: number = 0;

  constructor(private hotelService: HotelService, private router: Router) {} // Inyecta Router aquí

  ngOnInit(): void {
    const selectedHotel = this.hotelService.getSelectedHotel();
    if (selectedHotel) {
      this.hotel = selectedHotel;
    } else {
      alert('No se encontró información del hotel seleccionado.');
    }
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
