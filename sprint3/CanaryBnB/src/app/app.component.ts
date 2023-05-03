import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-headerunlogged></app-headerunlogged>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nombre-de-tu-aplicacion';
}
