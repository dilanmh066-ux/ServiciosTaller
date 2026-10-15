import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private mensaje = new BehaviorSubject<string>('');
  mensaje$ = this.mensaje.asObservable();

  private historial = new BehaviorSubject<string[]>([]);
  historial$ = this.historial.asObservable();

  enviarMensaje(nuevoMensaje: string) {
    this.mensaje.next(nuevoMensaje);

    const historialActual = this.historial.value;
    this.historial.next([
      ...historialActual,
      nuevoMensaje
    ]);
  }
}