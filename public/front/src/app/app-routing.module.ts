import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calcados',
    loadChildren: () => import('./calcados/calcados.module').then( m => m.CalcadosPageModule)
  },
  {
    path: 'camisetas',
    loadChildren: () => import('./camisetas/camisetas.module').then( m => m.CamisetasPageModule)
  },
  {
    path: 'calcas',
    loadChildren: () => import('./calcas/calcas.module').then( m => m.CalcasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
