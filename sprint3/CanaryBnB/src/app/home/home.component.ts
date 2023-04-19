import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  location = '';
  hotels: any[] = [];
  topRatedHotels: any[] = [];

  constructor(private router: Router, private http: HttpClient, private hotelService: HotelService) { }

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
  
  
  


  search(): void {
    this.router.navigate(['/disponibles'], { queryParams: { location: this.location } });
  }
}
