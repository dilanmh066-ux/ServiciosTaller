import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService, Producto } from '../services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html'
})
export class ProductosComponent {
  listaProductos: Producto[] = [
    { id: 1, nombre: 'Teclado', precio: 80000 },
    { id: 2, nombre: 'Mouse', precio: 50000 },
    { id: 3, nombre: 'Monitor', precio: 600000 },
    { id: 4, nombre: 'Audífonos', precio: 120000 }
  ];

  constructor(private carritoService: CarritoService) {}

  agregar(producto: Producto) {
    this.carritoService.agregarProducto(producto);
  }
}