import { Component, OnInit } from '@angular/core';
import { HotelService, Hotel } from '../../services/hotel.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topHotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getTopRatedHotels().subscribe(hotels => {
      this.topHotels = hotels;
    });
  }
}
