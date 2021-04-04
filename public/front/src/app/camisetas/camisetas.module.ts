import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamisetasPageRoutingModule } from './camisetas-routing.module';

import { CamisetasPage } from './camisetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamisetasPageRoutingModule
  ],
  declarations: [CamisetasPage]
})
export class CamisetasPageModule {}
