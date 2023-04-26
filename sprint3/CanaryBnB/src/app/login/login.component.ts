import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder, private auth: AuthService){ }

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

  loginAction(): void{
    if (this.formLogin.valid) {
      /* const email = this.formLogin.get('email')?.value; // agregamos el ? para manejar posible valor nulo */
      const email: string = this.formLogin.get('email')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      const password: string = this.formLogin.get('password')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      console.log(this.formLogin.value);
      this.auth.login(email, password);
      this.formLogin.reset();
    }
  }
  

}
