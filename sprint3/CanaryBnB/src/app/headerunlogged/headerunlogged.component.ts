<<<<<<< HEAD
import { Component, Output, EventEmitter } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerunlogged',
  templateUrl: './headerunlogged.component.html',
  styleUrls: ['./headerunlogged.component.css']
})
export class HeaderunloggedComponent {
<<<<<<< HEAD
  @Output() logoClicked = new EventEmitter<void>();

  constructor(private router: Router) { }
=======
  constructor(private router: Router ) { }
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

<<<<<<< HEAD
  onLogoClick() {
    this.logoClicked.emit();
  }
=======
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5
}
