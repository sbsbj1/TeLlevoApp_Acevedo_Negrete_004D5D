import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { CardbService,Datos } from '../../services/cardb.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-datos',
  templateUrl: './datauser.page.html',
  styleUrls: ['./datauser.page.scss'],
})
export class DatauserPage implements OnInit {

  datos : Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private menuController: MenuController, 
              private cardbService: CardbService, 
              private plt: Platform,
              private navController:NavController,
              private alertController: AlertController, 
              private toastController: ToastController) {
                this.plt.ready().then(()=>{ 
                  this.loadDatos();
                })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('second');
  }

  //invocamos al método getDatos() del servicio
  loadDatos(){
    this.cardbService.getDatos().then(datos=>{ 
      this.datos = datos;
    })
  }

  //creamos un objeto del tipo interface Datos, invocamos al método del servicio
  addDatos(){
    this.newDato.modified=Date.now();
    this.newDato.id=Date.now();
    this.cardbService.addDatos(this.newDato).then(dato => { 
      this.newDato = <Datos>{};
      this.showToast('Vehiculo Agregado!');
      this.loadDatos();
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }

   //update
   updateDatos(dato: Datos ){
    dato.Patente = `UPDATED: ${dato.Patente}`;
    dato.modified = Date.now();
    this.cardbService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(dato: Datos){
    this.cardbService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }




  async exit(){
    const alerta= await this.alertController.create({
      header: 'Gracias por visitarnos!',
      buttons:['ok'],
      mode:'ios'
    })
    await alerta.present();
    localStorage.removeItem('Conductor');
    this.navController.navigateRoot('/buthome');

    
  


    
  }

  Logout(){
    localStorage.removeItem('Conductor');
    this.navController.navigateRoot('login');
  }




}
