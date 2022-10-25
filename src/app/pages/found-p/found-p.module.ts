import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundPPageRoutingModule } from './found-p-routing.module';

import { FoundPPage } from './found-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundPPageRoutingModule
  ],
  declarations: [FoundPPage]
})
export class FoundPPageModule {}
