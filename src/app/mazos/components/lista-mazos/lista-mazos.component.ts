import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cartas_constructor } from 'src/app/cartas/interfaces/carta.interface';
import { Mazos } from '../../interfaces/mazo.interface';
import { MazoService } from '../../services/mazo.service';

@Component({
  selector: 'app-lista-mazos',
  templateUrl: './lista-mazos.component.html',
  styleUrls: ['./lista-mazos.component.css']
})
export class ListaMazosComponent {

  mazos: Mazos[] = [];
  hayError: boolean = false;
  formBu: FormGroup;
  cartaModal: Cartas_constructor = null!;

  constructor( private mazoService: MazoService,
               private fb: FormBuilder) { 

    this.formBu = this.fb.group({
      name: new FormControl(),
      text: new FormControl()
    })
  }

  ngOnInit(): void {

    this.buscar(this.formBu);
  }

  buscar( formulario: FormGroup<any>) {
    this.hayError = false;

    //console.log(formulario.value);
    
    //this.mazoService.getMazos(formulario).subscribe( mazos => {
    this.mazoService.getAllMazos().subscribe( mazos => {
      console.log(mazos);
      
      this.mazos = mazos;
    })
  }

}