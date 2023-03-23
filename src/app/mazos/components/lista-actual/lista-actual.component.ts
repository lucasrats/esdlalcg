import { Component, Input, OnInit } from '@angular/core';
import { Cartas_constructor } from 'src/app/cartas/interfaces/carta.interface';
import { Mazos } from '../../interfaces/mazo.interface';

@Component({
  selector: 'app-lista-actual',
  templateUrl: './lista-actual.component.html',
  styleUrls: ['./lista-actual.component.css']
})
export class ListaActualComponent implements OnInit{

  @Input()
  mazo: Mazos = null!;

  @Input()
  tiposCartasSort: any[] = [];

  cartaModal: Cartas_constructor = null!;


  ngOnInit(): void {
    
  }

  getTotalCartas(): number {
    return this.mazo.slots.reduce((total, carta) => {
      return total + carta.copias;
    }, 0);
  }

}
