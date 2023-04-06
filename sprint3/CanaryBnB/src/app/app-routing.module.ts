import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'disponibles', component: DisponiblesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
