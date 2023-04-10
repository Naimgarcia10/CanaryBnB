
import { Component, ViewChild } from '@angular/core';
import { DisponiblesComponent } from './disponibles/disponibles.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nombre-de-tu-aplicacion';

  onFiltersApplied(filters: any): void {
    // Aquí puedes manejar los filtros aplicados desde el componente Hotelfilter.
    // Por ahora, solo imprimiremos los filtros en la consola.
    console.log('Filtros aplicados:', filters);
  }
}
