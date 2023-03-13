import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'alexis';
  nombreUpper: string = 'ALEXIS';
  nombreCompleto: string = 'AlExIs lEmA';

  fecha: Date = new Date();//dia de hoy

}
