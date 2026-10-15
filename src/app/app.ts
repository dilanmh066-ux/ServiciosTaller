import { Component } from '@angular/core';
import { ControlContadorComponent } from './control-contador/control-contador';
import { VisorContadorComponent } from './visor-contador/visor-contador';
import { ProductosComponent } from './productos/productos';
import { CarritoComponent } from './carrito/carrito';
import { EmisorComponent } from './emisor/emisor';
import { ReceptorComponent } from './receptor/receptor';
import { HistorialComponent } from './historial/historial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ControlContadorComponent,
    VisorContadorComponent,
    ProductosComponent,
    CarritoComponent,
    EmisorComponent,
    ReceptorComponent,
    HistorialComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}