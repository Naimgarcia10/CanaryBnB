import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-hotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {
  hotel: any;
  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    const selectedHotel = localStorage.getItem('selectedHotel');
    if (selectedHotel) {
      this.hotel = JSON.parse(selectedHotel);
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
