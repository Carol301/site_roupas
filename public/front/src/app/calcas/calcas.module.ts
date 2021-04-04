import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcasPageRoutingModule } from './calcas-routing.module';

import { CalcasPage } from './calcas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcasPageRoutingModule
  ],
  declarations: [CalcasPage]
})
export class CalcasPageModule {}
