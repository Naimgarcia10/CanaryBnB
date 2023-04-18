import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-hotel',
  templateUrl: './specifichotel.component.html',
  styleUrls: ['./specifichotel.component.css']
})
export class SpecifichotelComponent implements OnInit {
  hotel: any;

  constructor() { }

  ngOnInit(): void {
    const selectedHotel = localStorage.getItem('selectedHotel');
    if (selectedHotel) {
      this.hotel = JSON.parse(selectedHotel);
    }
  }
}
