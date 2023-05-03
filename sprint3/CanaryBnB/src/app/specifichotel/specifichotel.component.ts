import { Component, OnInit } from '@angular/core';
import { HotelService, Hotel } from '../hotel.service';

@Component({
  selector: 'app-specifichotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {
  hotel!: Hotel;
  currentImageIndex: number = 0;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    const selectedHotel = this.hotelService.getSelectedHotel();
    if (selectedHotel) {
      this.hotel = selectedHotel;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.hotel.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.currentImageIndex < this.hotel.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }
}
