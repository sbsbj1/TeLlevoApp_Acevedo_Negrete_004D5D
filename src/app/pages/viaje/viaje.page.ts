import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(private menuController: MenuController,private navController:NavController, public alertController : AlertController, public navCtrl: NavController ) { }

  ngOnInit() {
    
  }


  mostrarMenu() {
    this.menuController.open('Seck');
  }



  Logout(){
    localStorage.removeItem('Ingresado');
    this.navController.navigateRoot('buthome');
  }


  async exit(){
    const alerta= await this.alertController.create({
      header: 'Gracias por visitarnos!',
      buttons:['ok'],
      mode:'ios'
    })
    await alerta.present();
    localStorage.removeItem('Ingresado');
    this.navCtrl.navigateRoot('/buthome');

    
  


    
  }

}
