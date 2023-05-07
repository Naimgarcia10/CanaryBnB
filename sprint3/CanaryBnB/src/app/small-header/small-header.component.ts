import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserModel } from '../models/user_model';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-small-header',
  templateUrl: './small-header.component.html',
  styleUrls: ['./small-header.component.css']
})
export class SmallHeaderComponent implements OnInit {
  @Output() logoClicked = new EventEmitter<void>();
  userFullName: string | null = null;
  userProfilePic: string | null = null;

  constructor(private router: Router, private authService: AuthService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe((user: UserModel | null) => {
      this.userProfilePic = user?.profilePic || null;
      this.userFullName = user?.fullname.split(" ")[0] || null;
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
  
  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    if (selectedValue === 'reservation-history') {
      this.router.navigate(['/reservation-historial']);
    } else if (selectedValue === 'edit-profile') {
      this.router.navigate(['/edit-profile']);
    }if (selectedValue === 'logOut') {
      this.authService.logout();
      this.userFullName = '';
    }
  }
}

