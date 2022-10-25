import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../Interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: Article[] = [];

  constructor(private menuController: MenuController, private noticiasService: NoticiasService, public navCtrl: NavController, public alertController : AlertController) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    })

  }

  mostrarMenu(){
    this.menuController.open('second');
  }


  async exit(){
    const alerta= await this.alertController.create({
      header: 'Gracias por visitarnos!',
      buttons:['ok'],
      mode:'ios'
    })
    await alerta.present();
    localStorage.removeItem('Conductor');
    this.navCtrl.navigateRoot('/buthome');



}


Logout(){
  localStorage.removeItem('Conductor');
  this.navCtrl.navigateRoot('/buthome');
}


}