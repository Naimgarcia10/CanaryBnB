import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService, Hotel } from '../hotel.service';

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

  constructor(private router: Router, private hotelService: HotelService) {}

  ngOnInit(): void {}

  submitForm() {
    if (!this.formData.destination) {
      alert('Por favor, ingrese un destino válido.');
      return;
    }

    this.hotelService.getHotelsByLocation(this.formData.destination).subscribe((hotels: Hotel[]) => {
      this.hotelService.setFoundHotels(hotels);
      this.router.navigate(['/disponibles']);
    });
  }
}
