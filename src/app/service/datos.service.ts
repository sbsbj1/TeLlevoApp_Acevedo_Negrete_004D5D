import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Pasajero{
  userPasajero: string;
  nomPasajero: string;
  correoPasajero: string;
  passPasajero: string;
  repassPasajero
}

const USERS_KEY ='my-pasajero';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
  }


  async init(){
    const storage = await this.storage.create();
    this._storage = storage;  
  }


  async addUsuario(dato: Pasajero):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Pasajero[])=>{
      if (datos){
          datos.push(dato);
          return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
     })
  }


  async getPasajero(){
    return this.storage.get(USERS_KEY);
  }
}
