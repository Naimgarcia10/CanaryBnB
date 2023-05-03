import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelfilterComponent } from './hotelfilter/hotelfilter.component';
import { SpecifichotelComponent } from './specifichotel/specifichotel.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import {ReservationHistorialComponent} from './reservation-historial/reservation-historial.component';
<<<<<<< HEAD
import { ContainerComponent } from './container/container.component';
=======
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5



const routes: Routes = [
  { path: '', component: HomeComponent },
<<<<<<< HEAD
  
  
=======
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5
  { path: 'disponibles', component: DisponiblesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotelfilter', component: HotelfilterComponent },
  { path: 'specifichotel', component: SpecifichotelComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'reservation-historial', component: ReservationHistorialComponent }
];

<<<<<<< HEAD


=======
>>>>>>> 61adc60021a03b26fa1cb6e955212dc088efffe5
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
