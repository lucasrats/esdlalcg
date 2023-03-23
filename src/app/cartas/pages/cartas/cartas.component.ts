import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { query, QueryConstraint, where } from 'firebase/firestore';
import { Cartas } from '../../interfaces/carta.interface';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  cartas: Cartas[] = [];
  hayError: boolean = false;

  constructor( private cardService: CardService) { }

  ngOnInit(): void {
  }

  buscar( formulario: FormGroup<any>) {
    this.hayError = false;

    //console.log(formulario.value);
    
    this.cardService.getCards(formulario).subscribe( cartas => {
      this.cartas = cartas;
    })
  }

}
