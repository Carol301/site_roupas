import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamisetasPage } from './camisetas.page';

const routes: Routes = [
  {
    path: '',
    component: CamisetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisetasPageRoutingModule {}
