import { Component, Input, OnInit } from '@angular/core';
import { Cartas } from '../../interfaces/carta.interface';

declare var bootstrap: any;

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.css']
})
export class ListaCartasComponent implements OnInit {

  @Input() cartas: Cartas[] = [];

  numcarta: string  = '';

  constructor() {     

    
  }

  ngOnInit(): void {
    
  }

  fondoTipo(esfera: string){
/*
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
*/

    switch(esfera){
      case 'lore': return 'table-success';
      case 'tactics': return 'table-danger';
      case 'spirit': return 'table-info';
      case 'leadership': return 'table-leadership';
      case 'fellowship': case 'baggins': return 'table-warning';
      case 'neutral': default: return 'table-secondary';
    }

  }

}
