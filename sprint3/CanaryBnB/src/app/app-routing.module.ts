import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Añade HomeComponent
import { DisponiblesComponent } from './components/disponibles/disponibles.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HotelfilterComponent } from './components/hotelfilter/hotelfilter.component';
import { SpecifichotelComponent } from './components/specifichotel/specifichotel.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import {ReservationHistorialComponent} from './components/reservation-historial/reservation-historial.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'disponibles', component: DisponiblesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotelfilter', component: HotelfilterComponent },
  { path: 'specifichotel', component: SpecifichotelComponent },
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'reservation-historial', component: ReservationHistorialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent },
  { path: 'edit-profile', component: EditProfileComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
