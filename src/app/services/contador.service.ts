import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private contadorSubject = new BehaviorSubject<number>(0);
  contador$ = this.contadorSubject.asObservable();

  sumar() {
    this.contadorSubject.next(this.contadorSubject.value + 1);
  }

  restar() {
    this.contadorSubject.next(this.contadorSubject.value - 1);
  }

  reiniciar() {
    this.contadorSubject.next(0);
  }
}