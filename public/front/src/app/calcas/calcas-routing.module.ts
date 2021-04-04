import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcasPage } from './calcas.page';

const routes: Routes = [
  {
    path: '',
    component: CalcasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcasPageRoutingModule {}
