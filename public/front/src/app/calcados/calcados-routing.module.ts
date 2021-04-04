import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcadosPage } from './calcados.page';

const routes: Routes = [
  {
    path: '',
    component: CalcadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcadosPageRoutingModule {}
