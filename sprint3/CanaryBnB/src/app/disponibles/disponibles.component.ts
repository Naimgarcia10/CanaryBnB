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
  selectedSortOption: string = '';
  filters: any = {};

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
        this.applyFiltersAndSorting();
      } else {
        this.hotels = [];
      }
    });
  }

  onSortChange(event: any): void {
    this.selectedSortOption = event.target.value;
    this.applyFiltersAndSorting();
  }

  applyFiltersAndSorting(): void {
    let hotelsFiltrados = [...this.hotels];

    if (this.filters.alojamiento && this.filters.alojamiento.length > 0) {
      hotelsFiltrados = hotelsFiltrados.filter(hotel => this.filters.alojamiento.includes(hotel.tipo));
    }

    if (this.filters.precio === 'menor') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (this.filters.precio === 'mayor') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => b.precio - a.precio);
    }

    // Aplica el ordenamiento según la opción seleccionada
    if (this.selectedSortOption === 'price') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'rating') {
      hotelsFiltrados = hotelsFiltrados.sort((a, b) => b.rating - a.rating);
    }

    this.hotels = hotelsFiltrados;
  }

  onFiltersApplied(filters: any): void {
    this.filters = filters;
    this.applyFiltersAndSorting();
  }
}
