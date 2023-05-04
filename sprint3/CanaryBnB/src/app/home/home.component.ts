import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService, Hotel } from '../hotel.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  formData = {
    destination: '',
    checkin: '',
    checkout: '',
    people: 1
  };

  
  bestRatedHotels: Hotel[] = []; // Agrega esta línea
  reservationId: string = '' ; // Agrega esta línea

  constructor(private router: Router, private hotelService: HotelService, private reservationService: ReservationService) {}
  
  ngOnInit(): void {
    this.getTopRatedHotels(); // Agrega esta línea
  }

  saveHomeData() {
    localStorage.setItem('checkin', this.formData.checkin);
    localStorage.setItem('checkout', this.formData.checkout);
    localStorage.setItem('people', this.formData.people.toString());

  }

  submitForm() {
    if (!this.formData.destination) {
      alert('Por favor, ingrese un destino válido.');
      return;
    }

    if (!this.formData.checkin || !this.formData.checkout) {
      alert('Por favor, complete los campos de fecha de entrada y fecha de salida.');
      return;
    }

    if (new Date(this.formData.checkin) > new Date(this.formData.checkout)) {
      alert('La fecha de entrada no puede ser posterior a la fecha de salida.');
      return;
    }
    

    if (this.formData.people <= 0) {
      alert('Por favor, ingrese un número de personas válido.');
      return;
    }

    this.hotelService.getHotelsByLocation(this.formData.destination).subscribe((hotels: Hotel[]) => {
      this.hotelService.setFoundHotels(hotels);
      this.router.navigate(['/disponibles']);
    });
  }

  // Agrega esta función
  getTopRatedHotels(): void {
    this.hotelService.getTopRatedHotels().subscribe((hotels: Hotel[]) => {
      this.bestRatedHotels = hotels;
    });
  }

  selectBestRatedHotel(index: number): void {
    const selectedHotel = this.bestRatedHotels[index];
    this.hotelService.setSelectedHotel(selectedHotel);
    this.router.navigate(['/specifichotel']);
  }
}
