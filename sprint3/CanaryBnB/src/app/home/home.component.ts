import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  location = '';
  hotels: any[] = [];
  topRatedHotels: any[] = [];
  public fechaEntrada: Date = new Date();
  public fechaSalida: Date = new Date();
  public personas: number = 2;



  constructor(private router: Router, private http: HttpClient, private hotelService: HotelService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.hotelService.getTopRatedHotels().subscribe(hotels => {
      this.topRatedHotels = hotels;
    });
  }

  getTopRatedHotels(): any[] {
    if (this.hotels && this.hotels.length > 0) {
      const sortedHotels = this.hotels.sort((a: any, b: any) => b.rating - a.rating);
      console.log("hoteles", sortedHotels);
      return sortedHotels.slice(0, 3);
    }
    return [];    
  }
  
  selectHotel(hotel: any) {
    localStorage.setItem('selectedHotel', JSON.stringify(hotel));
  }
  
  search(checkInDate: Date, checkOutDate: Date, numberOfPeople: number): void {
    if (!this.fechaEntrada || !this.fechaSalida) {
      alert('Por favor, complete los campos de fecha de entrada y salida.');
      return;
    }

    if (new Date(this.fechaEntrada) > new Date(this.fechaSalida)) {
      alert('La fecha de entrada no puede ser posterior a la fecha de salida.');
      return;
    }

    if (this.personas <= 0) {
      alert('Por favor, ingrese un número de personas válido.');
      return;
    }
    this.router.navigate(['/disponibles'], { queryParams: { location: this.location } });
  }
}
