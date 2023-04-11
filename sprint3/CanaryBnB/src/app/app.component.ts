import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nombre-de-tu-aplicacion';

  onFiltersApplied(filters: any): void {
    console.log('Filtros aplicados:', filters);
  }
}
