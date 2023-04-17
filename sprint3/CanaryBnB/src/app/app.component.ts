import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nombre-de-tu-aplicacion';

  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCH_ecZzdkC0HJXy5yvMizPhGPIiXtoh6s",
      authDomain: "canarybnb-db.firebaseapp.com",
    });
  }

  onFiltersApplied(filters: any): void {
    console.log('Filtros aplicados:', filters);
  }
}
