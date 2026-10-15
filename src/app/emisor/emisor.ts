import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-emisor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emisor.html'
})
export class EmisorComponent {
  textoMensaje: string = '';

  constructor(private mensajeService: MensajeService) {}

  enviar() {
    if (this.textoMensaje.trim() !== '') {
      this.mensajeService.enviarMensaje(this.textoMensaje);
      this.textoMensaje = '';
    }
  }
}