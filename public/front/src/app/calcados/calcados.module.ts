import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcadosPageRoutingModule } from './calcados-routing.module';

import { CalcadosPage } from './calcados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcadosPageRoutingModule
  ],
  declarations: [CalcadosPage]
})
export class CalcadosPageModule {}
