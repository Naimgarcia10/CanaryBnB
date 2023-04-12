import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  location = '';

  constructor(private router: Router, private http: HttpClient ) { }

  


  search(): void {
    this.router.navigate(['/disponibles'], { queryParams: { location: this.location } });
  }
}
