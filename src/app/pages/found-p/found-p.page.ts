import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-found-p',
  templateUrl: './found-p.page.html',
  styleUrls: ['./found-p.page.scss'],
})
export class FoundPPage implements OnInit {

  constructor(private menuController:MenuController,private alertController: AlertController ,
    private navController: NavController) { }

  ngOnInit() {
  }

  
  mostrarMenu(){
    this.menuController.open('second');
  }

  


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '✔️Confirmaste la llega✔️',
      
      message: 'Gracias por usar TellevoApp😍',
      buttons: ['Confirmar'],
    });

    await alert.present();
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
