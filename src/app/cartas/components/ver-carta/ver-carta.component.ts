import { Component, OnInit } from '@angular/core';
import { Cartas } from '../../interfaces/carta.interface';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-ver-carta',
  templateUrl: './ver-carta.component.html',
  styleUrls: ['./ver-carta.component.css']
})
export class VerCartaComponent implements OnInit {

  carta: Cartas = null!;

  constructor( 
    private cardService: CardService,
    private routerService: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.routerService.params.subscribe( params => {
      let codeCard = params['id'];

      this.cardService.getCardByCode( codeCard).subscribe( card => {
        this.carta = card[0];
      })

    });

    
  }

}
