import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotelfilter',
  templateUrl: './hotelfilter.component.html',
  styleUrls: ['./hotelfilter.component.css']
})
export class HotelfilterComponent implements OnInit {
  alojamientoSeleccionado: string[] = [];

  @Output() applyFilters = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAlojamientoSelectionChange(event: any): void {
    if (event.target.checked) {
      this.alojamientoSeleccionado.push(event.target.value);
    } else {
      const index = this.alojamientoSeleccionado.indexOf(event.target.value);
      if (index !== -1) {
        this.alojamientoSeleccionado.splice(index, 1);
      }
    }
  }

  emitFilters(): void {
    const filters = {
      alojamiento: this.alojamientoSeleccionado,
    };
  
    this.applyFilters.emit(filters);
  }
}
