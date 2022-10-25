import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

interface Compot{
  icon:string;
  name:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'car-sport-outline',
      name: 'Iniciativa',
      redirecTo: '/home',
    },
    {
      icon: 'accessibility-outline',
      name: 'viaje',
      redirecTo: '/viaje',
    },    
    

  ];



  compo:Compot[]= [
    {
      icon: 'body-outline',
      name: 'found-p',
      redirecTo: '/found-p',
    },
    {
      icon: 'car-sport-outline',
      name: 'noticias',
      redirecTo: '/noticias',

    },
    {
      icon: 'car-sport-outline',
      name: 'Ingresar vehiculo',
      redirecTo: '/datauser',

    }

  ];




}