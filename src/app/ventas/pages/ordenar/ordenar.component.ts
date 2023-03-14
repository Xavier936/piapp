import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  siVuela:boolean = true;
  ordenarPor:string ='';
  heroes:Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Dardevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarEstado(){

    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }


}
