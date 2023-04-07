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
  alojamientoSeleccionado: string[] = [];
  filtroPrecio: string = ''; // Nueva propiedad para el filtro de precio

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

  applyFilter(): void {
    let hotelsFiltrados = [...this.hotels];

    if (this.alojamientoSeleccionado.length > 0) {
      hotelsFiltrados = hotelsFiltrados.filter(hotel => this.alojamientoSeleccionado.includes(hotel.tipo));
    }

    if (this.filtroPrecio === 'menor') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (this.filtroPrecio === 'mayor') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => b.precio - a.precio);
    }

    this.hotels = hotelsFiltrados;
  }

  
}
