import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatauserPageRoutingModule } from './datauser-routing.module';

import { DatauserPage } from './datauser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatauserPageRoutingModule
  ],
  declarations: [DatauserPage]
})
export class DatauserPageModule {}
