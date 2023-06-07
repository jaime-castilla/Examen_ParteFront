import { Component } from '@angular/core';
import { Autobuses } from '../_modelo/autobuses';
import { ServicioExamenParteFrontService } from '../servicio-examen-parte-front.service';

@Component({
  selector: 'app-comp-examen-parte-front',
  templateUrl: './comp-examen-parte-front.component.html',
  styleUrls: ['./comp-examen-parte-front.component.css']
})
export class CompExamenParteFrontComponent {

  infoAutobuses: Autobuses[] = []

  //Arrays para que me saque algún dato en la tabla, sino no me sacará nada porque no tengo la parte Back.
  matriculasBuses: string[] = ["2365 JBF", "1254 KGT", "4671 LMD","3476 GVB","2854 LGK"]
  visitas: string[] = ["4","12","24","8","16"]


  constructor(private servicio: ServicioExamenParteFrontService){}

  ngOnInit(): void {
    this.servicio.sacarInfo()
      .subscribe(datos => {this.infoAutobuses = datos;})
    }

}
