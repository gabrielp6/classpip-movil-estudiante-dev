import { Component, OnInit, ViewChild } from '@angular/core';
import { SesionService } from '../servicios/sesion.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { PeticionesAPIService } from '../servicios/index';
import { CalculosService } from '../servicios/calculos.service';
import { Juego, Equipo } from '../clases/index';
import { Router } from '@angular/router';
import { JuegoSeleccionadoPage } from '../juego-seleccionado/juego-seleccionado.page';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-mis-juegos-inactivos',
  templateUrl: './mis-juegos-inactivos.page.html',
  styleUrls: ['./mis-juegos-inactivos.page.scss'],
})
export class MisJuegosInactivosPage implements OnInit {
  /* Creamos los array con los juegos activos e inactivos que solicitaremos a la API */
  id: number;

  JuegosInactivos: Juego[] = [];
  disablePrevBtn = true;
  disableNextBtn = false;



  @ViewChild(IonSlides) slides: IonSlides;



  constructor(
    private route: Router,
    public navCtrl: NavController,
    private sesion: SesionService,
    private peticionesAPI: PeticionesAPIService,
    private calculos: CalculosService
  ) { }
 
  ngOnInit() {
    this.id = this.sesion.DameAlumno().id;
    console.log('Este es el id del alumno que se ha logado: ' + this.id);
    this.DameJuegosAlumno(this.id);
   
  }
  async DameJuegosAlumno (id) {
    const listas =  await this.calculos.DameJuegosAlumno(id);
    this.JuegosInactivos = listas.inactivos;
  }

  

  JuegoSeleccionado(juego: any) {

    this.sesion.TomaJuego(juego);
    if (juego.Tipo === 'Juego De Puntos') {
      this.navCtrl.navigateForward('/juego-puntos');
    } else if (juego.Tipo === 'Juego De Competición Liga') {
      this.navCtrl.navigateForward('/juego-competicion-liga');
    } else if (juego.Tipo === 'Juego De Competición Fórmula Uno') {
      this.navCtrl.navigateForward('/juego-competicion-f1');
    } else if (juego.Tipo === 'Juego De Competición Torneo') {
      this.navCtrl.navigateForward('/juego-competicion-torneo');
    } else if (juego.Tipo === 'Juego De Cuestionario') {
      this.navCtrl.navigateForward('/juego-de-cuestionario');
    } else if (juego.Tipo === 'Juego De Geocaching') {
      this.navCtrl.navigateForward('/juego-de-geocaching');
    } else if (juego.Tipo === 'Juego De Avatar') {
      this.sesion.TomaJuegoAvatar(juego);
      this.navCtrl.navigateForward('/juego-avatar');
    } else if (juego.Tipo === 'Juego De Votación Uno A Todos') {
      this.navCtrl.navigateForward('/juego-votacion-uno-atodos');
    } else if (juego.Tipo === 'Juego De Votación Todos A Uno') {
      this.navCtrl.navigateForward('/juego-votacion-todos-auno');
    } else if (juego.Tipo === 'Juego De Cuestionario de Satisfacción') {
        this.navCtrl.navigateForward('/juego-cuestionario-satisfaccion');
    } else {
      this.navCtrl.navigateForward('/juego-colleccion');
    }
  }

  
  doCheck() {
    // Para decidir si hay que mostrar los botones de previo o siguiente slide
    const prom1 = this.slides.isBeginning();
    const prom2 = this.slides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }
  
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }


}
