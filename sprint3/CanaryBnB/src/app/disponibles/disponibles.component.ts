import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService, Hotel } from '../shared/hotel.service';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styleUrls: ['./disponibles.component.css']
})
export class DisponiblesComponent implements OnInit {
  foundHotels: Hotel[] = [];
  filteredHotels: Hotel[] = []; // Añade esta variable

  filterVilla = false;
  filterHotel = false;
  filterCasa = false;
  filterApartamento = false;

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.foundHotels = this.hotelService.getFoundHotels();
    this.filteredHotels = this.foundHotels; // Añade esta línea
  }

  applyFilters(): void {
    if (!this.filterVilla && !this.filterHotel && !this.filterCasa && !this.filterApartamento) {
      // Si no hay filtros seleccionados, muestra todos los hoteles
      this.filteredHotels = this.foundHotels;
    } else {
      this.filteredHotels = this.foundHotels.filter((hotel: Hotel) => {
        if (this.filterVilla && hotel.type === 'villa') return true;
        if (this.filterHotel && hotel.type === 'hotel') return true;
        if (this.filterApartamento && hotel.type === 'apartamento') return true;
        if (this.filterCasa && hotel.type === 'casa') return true;
        return false;
      });
    }
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

  selectHotel(index: number): void {
    const selectedHotel = this.foundHotels[index];
    this.hotelService.setSelectedHotel(selectedHotel);
    this.router.navigate(['/specifichotel']); // Agrega esta línea
  }

}
