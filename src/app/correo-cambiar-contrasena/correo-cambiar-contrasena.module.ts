import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CorreoCambiarContrasenaComponent } from './correo-cambiar-contrasena.page';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CorreoCambiarContrasenaComponent
      }
    ])
  ],
  declarations: [CorreoCambiarContrasenaComponent]
})
export class CorreoCambiarContrasenaModule {}