import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto) {
    const actual = this.carritoSubject.value;
    this.carritoSubject.next([...actual, producto]);
  }

  eliminarProducto(index: number) {
    const actual = [...this.carritoSubject.value];
    actual.splice(index, 1);
    this.carritoSubject.next(actual);
  }

  vaciarCarrito() {
    this.carritoSubject.next([]);
  }

  obtenerTotal(): number {
    let total = 0;
    for (let item of this.carritoSubject.value) {
      total += item.precio;
    }
    return total;
  }
}