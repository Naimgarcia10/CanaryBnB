import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {
  location = '';
  hotels: any[] = [];

  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.location = params['location'];
      this.loadHotels();
    });
  }

  loadHotels(): void {
    this.hotelService.getHotelsData().subscribe(data => {
      if (this.location && data[this.location]) {
        this.hotels = data[this.location];
      } else {
        this.hotels = [];
      }
    });
  }
}
