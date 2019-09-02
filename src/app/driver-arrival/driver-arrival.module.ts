import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DriverArrivalPage } from './driver-arrival.page';
import {TabsPageModule} from '../tabs/tabs.module';

const routes: Routes = [
  {
    path: '',
    component: DriverArrivalPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TabsPageModule
    ],
  declarations: [DriverArrivalPage]
})
export class DriverArrivalPageModule {}
