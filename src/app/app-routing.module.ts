import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'driver-arrival',
    loadChildren: './driver-arrival/driver-arrival.module#DriverArrivalPageModule',
  },
  {
    path: 'trailer-arrival',
    loadChildren: './trailer-arrival/trailer-arrival.module#TrailerArrivalPageModule'
  },
  {
    path: 'new-driver',
    loadChildren: './new-driver/new-driver.module#NewDriverPageModule'
  },
  {
    path: 'hard-surface',
    loadChildren: './hard-surface/hard-surface.module#HardSurfacePageModule'
  },
  {
    path: 'carpet',
    loadChildren: './carpet/carpet.module#CarpetPageModule'
  },
  {
    path: 'samples',
    loadChildren: './samples/samples.module#SamplesPageModule'
  },
  {
    path: 'supplies',
    loadChildren: './supplies/supplies.module#SuppliesPageModule'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginPageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
