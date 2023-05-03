import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  formData = {
    destination: '',
    checkin: '',
    checkout: '',
    people: 1
  };

  submitForm() {
    // Lógica para procesar el envío del formulario
    console.log(this.formData);
  }
}
