import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderloggedComponent } from './headerlogged/headerlogged.component';
import { HeaderunloggedComponent } from './headerunlogged/headerunlogged.component';
import { HomeComponent } from './home/home.component';
//import { DisponiblesComponent } from './disponibles/disponibles.component'; // Importa DisponiblesComponent

import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import { DisponiblesComponent } from './disponibles/disponibles.component'; // Importa HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderloggedComponent,
    HeaderunloggedComponent,
    HomeComponent,
    DisponiblesComponent,
    //DisponiblesComponent // Añade DisponiblesComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añade FormsModule aquí
    HttpClientModule, // Añade HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
