import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.html'
})
export class HistorialComponent {
  constructor(public mensajeService: MensajeService) {}
}