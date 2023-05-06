import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserModel } from '../models/user_model';

@Component({
  selector: 'app-headerunlogged',
  templateUrl: './headerunlogged.component.html',
  styleUrls: ['./headerunlogged.component.css']
})
export class HeaderunloggedComponent implements OnInit {
  @Output() logoClicked = new EventEmitter<void>();
  userFullName: string | null = null;
  userProfilePic: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe((user: UserModel | null) => {
      this.userProfilePic = user?.profilePic || null;
      this.userFullName = user?.fullname || null;
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onLogoClick() {
    this.logoClicked.emit();
  }

  logout() {
    this.authService.logout();
  }
}
