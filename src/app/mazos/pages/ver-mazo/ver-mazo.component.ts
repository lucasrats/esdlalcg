import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/cartas/services/card.service';
import { Mazos } from '../../interfaces/mazo.interface';
import { MazoService } from '../../services/mazo.service';

@Component({
  selector: 'app-ver-mazo',
  templateUrl: './ver-mazo.component.html',
  styleUrls: ['./ver-mazo.component.css']
})
export class VerMazoComponent implements OnInit{
  
  mazo: Mazos = null!;
  tiposCartasSort: any[] = [];

  cargaOK = false;

  constructor(
    private mazoService: MazoService,
    private cardService: CardService,
    private routerService: ActivatedRoute
    ) {}
  
  async ngOnInit(): Promise<void> {

    try {

      this.routerService.params.subscribe( async params => {
        let idDeck = params['id'];
  
        var resultado = await this.mazoService.getDeckById(idDeck);
        
        this.mazo = JSON.parse(JSON.stringify(resultado));
        this.tiposCartasSort = this.groupBy(this.mazo.slots,'type_code');

        this.cargaOK = true;
  
      });

    } catch (error) {
      console.log(error);
    }
      
  }

  groupBy(array: any[], property: string) {
    var hash: any = {};
    for (var i = 0; i < array.length; i++) {
        if (!hash[array[i][property]]) hash[array[i][property]] = [];
        hash[array[i][property]].push(array[i]);
    }
    return hash;
  }

}
