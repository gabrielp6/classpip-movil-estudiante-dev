import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { IniciPage } from './inici.page';


const routes: Routes = [
  {
    path: '',
    component: IniciPage,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SwiperModule
  ],
  declarations: [IniciPage]
})
export class IniciPageModule {}
