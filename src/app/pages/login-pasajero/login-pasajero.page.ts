import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DatosService, Pasajero } from '../../service/datos.service';

import {FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login-pasajero',
  templateUrl: './login-pasajero.page.html',
  styleUrls: ['./login-pasajero.page.scss'],
})
export class LoginPasajeroPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Pasajero[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController, 
              private datosService: DatosService, 
              private fb: FormBuilder,
              private menuController: MenuController) { 
                this.formularioLogin =this.fb.group({
                  'user' : new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required)

                })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.datosService.getPasajero().then(async datos=>{ 
      this.usuarios = datos;
      if (!datos || datos.length==0)
      {
        return null; 
      }

      for (let obj of this.usuarios){
        if (obj.userPasajero == f.user  && obj.passPasajero==f.password){

        for( let ff of this.usuarios){

          const alert = await this.alertController.create({
            header:'Bienvenido'+'  '+ ff.userPasajero,
            buttons: ['Aceptar']
          })
          await alert.present();
        }
      
          a=1;
          localStorage.setItem('Ingresado', 'true');//almacena localmente el estado de ingresado
          this.navController.navigateRoot('viaje');
        }
      }//for 
      if (a==0){
        this.alertMsg();
      }
    })
  }//findelmétodo


    async alerta (){
    const alert = await this.alertController.create({
      header:'Bienvenido' ,
      buttons: ['Aceptar']
    })
    await alert.present();
  }



  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: '¡El usuario ingresado no existe',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

 
}
