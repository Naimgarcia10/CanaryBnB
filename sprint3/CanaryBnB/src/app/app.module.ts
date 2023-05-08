import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Importa AngularFireStorageModule
/* componentes */
import { AppComponent } from './app.component';
import { HeaderunloggedComponent } from './components/headerunlogged/headerunlogged.component';
import { HomeComponent } from './components/home/home.component';
import { DisponiblesComponent } from './components/disponibles/disponibles.component';
import { HotelfilterComponent } from './components/hotelfilter/hotelfilter.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpecifichotelComponent } from './components/specifichotel/specifichotel.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { ReservationHistorialComponent } from './components/reservation-historial/reservation-historial.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { SmallHeaderComponent } from './components/small-header/small-header.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderunloggedComponent,
    HomeComponent,
    DisponiblesComponent,
    HotelfilterComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    SpecifichotelComponent,
    PaymentGatewayComponent,
    ReservationHistorialComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent,
   
    //DisponiblesComponent // Añade DisponiblesComponent aquí
    SmallHeaderComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Añade AngularFirestoreModule aquí
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
