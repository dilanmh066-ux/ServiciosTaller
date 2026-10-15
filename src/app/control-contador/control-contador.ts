import { Component } from '@angular/core';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-control-contador',
  standalone: true,
  templateUrl: './control-contador.html'
})
export class ControlContadorComponent {
  constructor(private contadorService: ContadorService) {}

  restar() {
    this.contadorService.restar();
  }

  sumar() {
    this.contadorService.sumar();
  }

  reiniciar() {
    this.contadorService.reiniciar();
  }
}