import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-receptor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receptor.html'
})
export class ReceptorComponent {
  constructor(public mensajeService: MensajeService) {}
}