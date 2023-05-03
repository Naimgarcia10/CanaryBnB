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
import { ContainerComponent } from './container/container.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  
  
  { path: 'disponibles', component: DisponiblesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotelfilter', component: HotelfilterComponent },
  { path: 'specifichotel', component: SpecifichotelComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'reservation-historial', component: ReservationHistorialComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
