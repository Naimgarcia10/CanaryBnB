import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-hotel',
  templateUrl: './selected-hotel.component.html',
  styleUrls: ['./selected-hotel.component.css']
})
export class SelectedHotelComponent implements OnInit {
  selectedHotel: Hotel | null = null;


  constructor(private hotelService: HotelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const hotelId = params.get('id');
      if (hotelId) {
        this.hotelService.getHotelById(hotelId).subscribe((hotel: Hotel | undefined) => {
          if (hotel) {
            this.selectedHotel = hotel;
          } else {
            alert('No se encontró información del hotel seleccionado.');
          }
        });
      } else {
        alert('No se encontró información del hotel seleccionado.');
      }
    });
  }
  
  
  

}
