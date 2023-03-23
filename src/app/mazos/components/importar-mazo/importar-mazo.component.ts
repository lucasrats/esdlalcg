import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from 'src/app/cartas/services/card.service';
import { Mazos, Mazo_BD } from '../../interfaces/mazo.interface';
import { MazoService } from '../../services/mazo.service';
import { ObjectToArrayPipe } from 'src/app/pipes/objectToArray.pipe';
import { lastValueFrom, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Cartas_constructor, Cartas_Mazo_BD } from 'src/app/cartas/interfaces/carta.interface';

@Component({
  selector: 'app-importar-mazo',
  templateUrl: './importar-mazo.component.html',
  styleUrls: ['./importar-mazo.component.css']
})
export class ImportarMazoComponent implements OnInit{

  mazo: Mazos = null!;
  mazoSubmit: Mazo_BD = null!;
  tiposCartasSort: any[] = [];
  cartaModal: Cartas_constructor = null!;

  formulario: FormGroup;

  cargaOK = false;

  constructor(
    private mazoService: MazoService,
    private cardService: CardService,
    private router: Router
    ) {

      this.formulario = new FormGroup({
        name: new FormControl(),
        deck: new FormControl(),
        description_md: new FormControl()
      })

    }

  async ngOnInit(): Promise<void> {

    try {
      var resultado = await this.mazoService.getMazo_RingsDB();
      this.mazo = JSON.parse(JSON.stringify(resultado));
      this.tiposCartasSort = this.groupBy(this.mazo.slots,'type_code');

      this.cargaOK = true;

    } catch (error) {
      console.log(error);
      
    }
    
  }

  onSubmit(){

    this.mazo.date_update = new Date(Date.now());
    this.mazoSubmit = JSON.parse(JSON.stringify(this.mazo));
    for (let objeto of this.mazoSubmit.heroes) {
      for (let propiedad in objeto) {
        if (propiedad !== '_id' && propiedad !== 'copias' && propiedad !== 'code') {
          delete (objeto as any)[propiedad];
        }
      }
    }

    for (let objeto of this.mazoSubmit.slots) {
      for (let propiedad in objeto) {
        if (propiedad !== '_id' && propiedad !== 'copias' && propiedad !== 'code') {
          delete (objeto as any)[propiedad];
        }
      }
    }

    if(this.mazo._id == ''){
      this.mazo.date_creation = new Date(Date.now());
      this.mazoService.guardarMazo(this.mazoSubmit)
      .then(response => {
        console.log("grabado OK. Creado id: " + response.id);
        this.mazo._id = response.id;
      })
    }
    else{
      this.mazoService.actualizarMazo(this.mazoSubmit)
      .then(() => {
        console.log("Actualizado correctamente")})
      .catch((error) => {
        console.log(`Algo ha ido mal al actualizar ${error}`)});
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

  async onEventoCopiasMiniB(cartaCopias: Cartas_constructor){

    let result = [];
    if(cartaCopias.type_code == 'hero'){
      result = await this.mazo.heroes.filter(carta => carta.code == cartaCopias.code);
    }
    else{
      result = await this.mazo.slots.filter(carta => carta.code == cartaCopias.code);
    }

    if(result.length == 0 && cartaCopias.copias > 0){
      if(cartaCopias.type_code == 'hero'){
        this.mazo.heroes.push(cartaCopias);
        this.mazo.heroes = JSON.parse(JSON.stringify(this.mazo.heroes));
        this.mazo.starting_threat += cartaCopias.threat;
      }
      else{
        this.mazo.slots.push(cartaCopias);
      }
    }
    else{
      if(cartaCopias.copias > 0){
        result[0].copias = cartaCopias.copias;
      }
      else if(cartaCopias.copias == 0){
        if(cartaCopias.type_code == 'hero'){
          this.mazo.heroes = this.arrayRemove(this.mazo.heroes, cartaCopias.code);
          this.mazo.starting_threat -= cartaCopias.threat;
        }
        else{
          this.mazo.slots = this.arrayRemove(this.mazo.slots, cartaCopias.code);
        }
      }
    }
    this.tiposCartasSort = this.groupBy(this.mazo.slots,'type_code');
    
  }

  arrayRemove(arr: any[], value: string) { 
    
    return arr.filter(function(ele){ 
        return ele.code != value;
    });
  }

  parsear(tecla: any){

    if(tecla.keyCode == '51'){
      //pulsado #

    }
    else if(tecla.keyCode == '54'){
      //pulsado &
      
    }
    
  }

}