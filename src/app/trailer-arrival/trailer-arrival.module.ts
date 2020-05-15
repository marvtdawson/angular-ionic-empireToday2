import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrailerArrivalPage } from './trailer-arrival.page';
import {LayoutModule} from '../layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: TrailerArrivalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  declarations: [TrailerArrivalPage]
})
export class TrailerArrivalPageModule {}
