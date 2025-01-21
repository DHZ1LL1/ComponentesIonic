import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacManPageRoutingModule } from './pac-man-routing.module';

import { PacManPage } from './pac-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacManPageRoutingModule
  ],
  declarations: [PacManPage]
})
export class PacManPageModule {}
