import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelfilterComponent } from './hotelfilter/hotelfilter.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'disponibles', component: DisponiblesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotelfilter', component: HotelfilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
