import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage {
  clave: string;
  contrasena: string;
  contrasenaRep: string;
  CambioContrasena = true;

  constructor() { }

  CambiarContrasena(){

  }

}
