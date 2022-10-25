import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService,Usuario } from '../../service/registroservice.service';

import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController, 
              private registroService: RegistroserviceService, 
              private fb: FormBuilder,
              private menuController: MenuController) { 
                  this.formularioLogin = this.fb.group({
                    'correo' : new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required)
                  })
              }

  ngOnInit() {
  }

  //busca el correo y password en el storage  
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(async datos=>{ 
      this.usuarios = datos;
      if (!datos || datos.length==0)
      {
        return null; 
      }

      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario==f.password){

        for( let ff of this.usuarios){

          const alert = await this.alertController.create({
            header:'Bienvenido'+'  '+ ff.correoUsuario,
            buttons: ['Aceptar']
          })
          await alert.present();
        }
      
          a=1;
          localStorage.setItem('Conductor', 'true');//almacena localmente el estado de ingresado
          this.navController.navigateRoot('noticias');
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
  }//findelmetodo

 

}