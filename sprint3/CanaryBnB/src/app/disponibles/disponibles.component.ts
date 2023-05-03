import { Component, OnInit } from '@angular/core';
import { HotelService, Hotel } from '../hotel.service';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {
  foundHotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.foundHotels = this.hotelService.getFoundHotels();
  }

  onSortChange(sortOption: string) {
    switch (sortOption) {
      case 'rating_desc':
        this.foundHotels.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating_asc':
        this.foundHotels.sort((a, b) => a.rating - b.rating);
        break;
      case 'price_desc':
        this.foundHotels.sort((a, b) => b.price - a.price);
        break;
      case 'price_asc':
        this.foundHotels.sort((a, b) => a.price - b.price);
        break;
    }
  }
  
}
