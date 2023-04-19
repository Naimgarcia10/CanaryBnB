import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  formRegister = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });

  get email() {
    return this.formRegister.get('email') as FormControl;
  }

  get password() {
    return this.formRegister.get('password') as FormControl;
  }

  register() {
    const user = {
      username: this.email.value,
      password: this.password.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User registered:', user);
  }
}
