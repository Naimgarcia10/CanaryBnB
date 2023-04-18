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
  hoteles: any[] = [];
  topHoteles: any[] = [];

  constructor(private router: Router, private http: HttpClient, private hotelService: HotelService  ) { }

  ngOnInit() {
    this.hotelService.getHotelsData().subscribe(data => {
      this.hoteles = data;
      this.obtenerTopHoteles();
    });
  }

  obtenerTopHoteles() {
    this.topHoteles = this.hoteles.sort((a, b) => b.valoracion - a.valoracion).slice(0, 3);
  }

  


  search(): void {
    this.router.navigate(['/disponibles'], { queryParams: { location: this.location } });
  }
}
