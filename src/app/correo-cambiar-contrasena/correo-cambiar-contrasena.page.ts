import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Media } from '@ionic-native/media/ngx';
import { Network } from '@ionic-native/network/ngx';
import { WheelSelector } from '@ionic-native/wheel-selector/ngx';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { Alumno } from '../clases';
import { ComServerService, PeticionesAPIService, SesionService } from '../servicios';

@Component({
  selector: 'app-correo-cambiar-contrasena',
  templateUrl: './correo-cambiar-contrasena.page.html',
  styleUrls: ['./correo-cambiar-contrasena.page.scss'],
})
export class CorreoCambiarContrasenaComponent {
  alumno: Alumno;
  nombre: string;
  email: string;

  indicarCorreoCambiarContrasena = true;


  constructor(
    private route: Router,
    public navCtrl: NavController,
    private peticionesAPI: PeticionesAPIService,
    private sesion: SesionService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private comServer: ComServerService,
    private selector: WheelSelector,
    private localNotifications: LocalNotifications,
    public platform: Platform,
    private network: Network,
  ) { 


    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

    


  }
  async EnviarCorreo() {}

  VolverDeEnviarCorreo() {
    this.route.navigateByUrl('/home');
  } 

}
