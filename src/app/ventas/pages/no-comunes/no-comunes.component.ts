import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa= {
     'masculino': 'invitarlo',
     'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Esteban', 'Jhon'];
  clientesMapa={
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Javier';
    this.genero = 'masculino';

  }

  borrarCliente(){
    this.clientes.pop();

  }


  //key value pipe
  persona={
    nombre: 'Alexis',
    edad : 30,
    direccion: 'Guaranda'
  }

  //Json pipe
  heroes=[
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
