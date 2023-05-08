import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { UserModel } from '../../models/user_model';
import { ReservationService } from '../../shared/reservation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder, private auth: AuthService, private reservationService: ReservationService){ }

  user: UserModel = new UserModel();

  ngOnInit() {
  }

  formLogin = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });

  get email(){
    return this.formLogin.get('email') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  loginAction(): void {
    console.log('Logging in...'); // Agrega esta línea
    if (this.formLogin.valid) {
      this.user.email = this.formLogin.get('email')!.value ?? '';
      this.user.password = this.formLogin.get('password')!.value ?? '';
      console.log(this.formLogin.value);
      this.auth.login(this.user);
      this.formLogin.reset();
      localStorage.setItem('user_email', this.user.email);
    }
  }
  

}
