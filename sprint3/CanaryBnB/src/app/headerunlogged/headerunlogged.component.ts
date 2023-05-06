import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserModel } from '../models/user_model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-headerunlogged',
  templateUrl: './headerunlogged.component.html',
  styleUrls: ['./headerunlogged.component.css']
})
export class HeaderunloggedComponent implements OnInit {
  @Output() logoClicked = new EventEmitter<void>();
  userFullName: string | null = null;
  userProfilePic: string | null = null;

  constructor(private router: Router, private authService: AuthService, private changeDetector: ChangeDetectorRef) { }


  ngOnInit() {
    this.authService.currentUser$
      .pipe(
        tap((user: UserModel | null) => {
          this.userProfilePic = user?.profilePic || null;
          this.userFullName = user?.fullname || null;
        })
      )
      .subscribe();
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
    console.log('Calling logout from header component...');
    this.authService.logout().then(() => {
      console.log('Logout successful');
      this.userFullName = null;
      this.userProfilePic = null;
      this.changeDetector.detectChanges();
    });
  }
  
}
