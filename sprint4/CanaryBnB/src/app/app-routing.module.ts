import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Asegúrate de que la ruta de importación es correcta

const routes: Routes = [
  { path: '', component: HomeComponent }, // define la ruta vacía '' que apunta al componente 'Home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}