import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre = '';
  email = '';
  mensaje = '';

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Correo electrónico:', this.email);
    console.log('Mensaje:', this.mensaje);

    // Aquí puedes agregar el código para enviar los datos del formulario a un servidor o servicio de correo electrónico
  }
}
