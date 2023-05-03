import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerunlogged',
  templateUrl: './headerunlogged.component.html',
  styleUrls: ['./headerunlogged.component.css']
})
export class HeaderunloggedComponent {
  @Output() logoClicked = new EventEmitter<void>();

  constructor(private router: Router) { }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onLogoClick() {
    this.logoClicked.emit();
  }
}
