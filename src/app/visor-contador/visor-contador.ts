import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-visor-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visor-contador.html'
})
export class VisorContadorComponent {
  constructor(public contadorService: ContadorService) {}
}