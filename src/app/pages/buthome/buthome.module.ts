import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButhomePageRoutingModule } from './buthome-routing.module';

import { ButhomePage } from './buthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButhomePageRoutingModule
  ],
  declarations: [ButhomePage]
})
export class ButhomePageModule {}
