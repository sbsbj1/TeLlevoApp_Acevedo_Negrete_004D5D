import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { DatosService, Pasajero } from '../../service/datos.service';

@Component({
  selector: 'app-registro-pasajero',
  templateUrl: './registro-pasajero.page.html',
  styleUrls: ['./registro-pasajero.page.scss'],
})
export class RegistroPasajeroPage implements OnInit {

  formularioR : FormGroup;
  newRegistre: Pasajero = <Pasajero>{};

  constructor(private alertController: AlertController, 
              private registroService: DatosService, 
              private toastController: ToastController, 
              private fb: FormBuilder,
              private menuController: MenuController) { 
                  this.formularioR = fb.group({ 
                    'usuario' : new FormControl("", [Validators.required]),
                    'nombre' : new FormControl("", [Validators.required]),
                    'correo' : new FormControl("", [Validators.required, Validators.email]),
                    'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)]),
                    'confirmaPass': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(18)])
                  }, {validator: this.checkIfMatchingPasswords('password', 'confirmaPass')});
               }
    passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
    mailv=(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    nm= (/[A-Za-z]\w/);
  

  ngOnInit() {
  }

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }




  async CrearUsuario(){
    var form = this.formularioR.value;
    if(this.formularioR.invalid){
      const alert = await this.alertController.create({
        header : 'Error..', 
        message: 'Debe ingresar todos los datos', 
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else{
      this.newRegistre.nomPasajero = form.nombre
      this.newRegistre.userPasajero = form.usuario
      this.newRegistre.correoPasajero = form.correo;
      this.newRegistre.passPasajero = form.password; 
      this.newRegistre.repassPasajero = form.confirmaPass;
      this.registroService.addUsuario(this.newRegistre).then(dato =>{
        this.newRegistre = <Pasajero>{};
        this.showToast('Usuario Creado con éxito!');
      })
    }//findelelse
    this.formularioR.reset();
  }


  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }



}
