import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inici',
        children: [
          {
            path: '',
            loadChildren: () => import('../inici/inici.module').then(m => m.IniciPageModule)
          }
        ]
      },
      {
        path: 'mis-juegos-inactivos',
        children: [
          {
            path: '',
            loadChildren: () => import('../mis-juegos-inactivos/mis-juegos-inactivos.module').then(m => m.MisJuegosInactivosPageModule)
          }
        ]
      },
      {
        path: 'mi-perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../mi-perfil/mi-perfil.module').then(m => m.MiPerfilPageModule)
          }
        ]
      },
      {
        path: 'mis-grupos',
        children: [
          {
            path: '',
            loadChildren: () => import('../mis-grupos/mis-grupos.module').then(m => m.MisGruposPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/inici',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inici',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
