import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { MisJuegosInactivosPage } from './mis-juegos-inactivos.page';

const routes: Routes = [
  {
    path: '',
    component: MisJuegosInactivosPage
  }
];

@NgModule({
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SwiperModule
  ],
  declarations: [MisJuegosInactivosPage]
})
export class MisJuegosInactivosPageModule {}
