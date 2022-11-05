import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Http,HttpOptions  } from '@capacitor-community/http'; 
import {from, Observable } from 'rxjs';
import { Alumno } from '../clases/Alumno';
import * as URL from '../URLs/urls';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {  

  private APIUrlAlumnos = URL.host +  '3000/api/Alumnos';
  constructor( private http: HttpClient) { 
  }

  // public DameAlumno(nombreUsuario: string, password: string): Observable<Alumno> {

  //   return this.http.get<Alumno>(this.APIUrlAlumnos + '?filter[where][Username]=' + nombreUsuario
  //     + '&filter[where][Password]=' + password);
  // }

  dameAlumno(nombreUsuario: string, password: string) {
    const options: HttpOptions = {
      // url: "http://colormind.io/list/", //No CORS
      // url:  "https://dog.ceo/api/breeds/image/random", //CORS
      url: this.APIUrlAlumnos,  //+ '?filter[where][Username]=' + nombreUsuario + '&filter[where][Password]=' + password,
    }
    console.log(options.url);
    return  from(Http.get(options));
    // return this.http.get<Alumno>(this.APIUrlAlumnos + '?filter[where][Username]=' + nombreUsuario
    //     + '&filter[where][Password]=' + password);
  }




}
