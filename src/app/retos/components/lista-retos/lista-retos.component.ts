import { Component, OnInit } from '@angular/core';
import { Reto } from '../../interfaces/reto.interface';
import { RetoService } from '../../services/reto.service';

@Component({
  selector: 'app-lista-retos',
  templateUrl: './lista-retos.component.html',
  styleUrls: ['./lista-retos.component.css']
})
export class ListaRetosComponent implements OnInit {

  retos: Reto[] = [];
  hayError: boolean = false;

  constructor( private retoService: RetoService) { }

  ngOnInit(): void {

    this.retoService.getRetos().subscribe( retos => {
      this.retos = retos;
      console.log(retos);
      
    })

  }

}
