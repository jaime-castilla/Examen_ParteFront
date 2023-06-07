import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autobuses } from './_modelo/autobuses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioExamenParteFrontService {

  sacarInfo():Observable<Autobuses[]>{
    return this.auto.get<Autobuses[]>('')  //No tengo la dirección de la BBDD.
  }

  constructor(private auto:HttpClient) { }
}
