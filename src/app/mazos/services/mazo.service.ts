import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, getDocs, updateDoc, setDoc, QueryConstraint, where, query, getDoc } from '@angular/fire/firestore';
import { Mazos, Mazos_ringsdb, Mazo_BD } from '../interfaces/mazo.interface';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/cartas/services/card.service';
import { Cartas_constructor } from 'src/app/cartas/interfaces/carta.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MazoService {

  constructor(
    private http: HttpClient,
    private cardService: CardService,
    private firestore: Firestore,
  ) { }

  urlApiMazo: string = "https://ringsdb.com/api/public/decklist/3382";
  url_api = "http://localhost:3000/api/mazo";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  mazo: Mazos = null!;

  guardarMazo( mazo: Mazo_BD){
    return this.http.post(this.url_api + "/nuevo", mazo, this.httpOptions) as Observable<Mazos>;
  }
  
  actualizarMazo( mazo: Mazo_BD){
    const mazoRef = doc(this.firestore, 'mazos', mazo._id);
    return setDoc(mazoRef, mazo);
  }

  async getMazo_RingsDB() {

    try {
      let res = await lastValueFrom(this.http.get(this.urlApiMazo));

      this.mazo = JSON.parse(JSON.stringify(res));
      let resultado1 = await this.rellenarHeroes_RingsDB();
      let resultado2 = await this.rellenarSlots_RingsDB();

      //eliminamos el id de ringsdb
      this.mazo._id = '';

      return this.mazo;

    } catch(err) {
        console.log(err);
        return this.mazo;
    }
    
  }

  async rellenarHeroes_RingsDB(){
    let heroes: any[] = [];
    heroes.pop();

    const data2 = (this.cardService.getCardsByCode(Object.keys(this.mazo.heroes).toString()));
    
    data2.subscribe( data => {
      data.forEach( (heroe1, index) => {
        Object.defineProperty(heroe1, 'copias', {
          value: Object.values(this.mazo.heroes)[index],
          writable: true,
          enumerable: true
        })
        heroes.push(heroe1);
      });
      this.mazo.heroes = heroes;
    });

    //return heroes as Cartas_constructor[];
    
  }

  async rellenarSlots_RingsDB(){
    let cartas: any[] = [];
    cartas.pop();
    let posicion = 0;
    const tamanyo = Object.keys(this.mazo.slots).length;
    let resta = Object.keys(this.mazo.slots).length;
    let slots:any = JSON.parse(JSON.stringify(this.mazo.slots));
    
    while(resta > 0){

      const data3 = await firstValueFrom(
        this.cardService.getCardsByCode(Object.keys(this.mazo.slots).slice(posicion, posicion + 10).toString())
      );

      data3.forEach( (carta1, index) => {
        //en el _slots no metemos los heroes, ya que van en su propio array
        if(carta1.type_code != 'hero'){
          Object.defineProperty(carta1, 'copias', {
            value: Object.values(slots)[index],
            writable: true,
            enumerable: true
          })
          cartas.push(carta1);
        }
      });
      posicion += 10;
      resta -= posicion;

      // const data2 = this.cardService.getCardsByCode(Object.keys(this.mazo.slots).slice(posicion, posicion + 10));

      // data2.subscribe( data => {

      //   data.forEach( (carta1, index) => {
      //     Object.defineProperty(carta1, 'copias', {
      //       value: Object.values(slots)[index]
      //     })
      //     cartas.push(carta1);
      //   });
      // });
      // posicion += 10;
      // resta -= posicion;
      
    }
    cartas.sort((a,b) => { 
        return a.type_code.localeCompare(b.type_code);
    });
    this.mazo.slots = cartas;
    
    //return cartas as Cartas_constructor[];
  }

  getAllMazos(){

    return this.http.get(this.url_api + "/getAll", this.httpOptions) as Observable<Mazos[]>;

  }

  getMazos( formulario: FormGroup){

    const mazoRef = collection(this.firestore, 'mazos');
    const wa:QueryConstraint[] = [];

    Object.keys(formulario.controls).forEach( valor => {
      
      if(formulario.controls[valor].value != null && formulario.controls[valor].value != ''){
        
        switch(valor){
          case 'name':
            let searchTerm = formulario.controls[valor].value;
            let strlength = searchTerm.length;
            let strFrontCode = searchTerm.slice(0, strlength-1);
            let strEndCode = searchTerm.slice(strlength-1, searchTerm.length);
            // This is an important bit..
            let endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

            wa.push(where(valor,'>=',searchTerm));
            wa.push(where(valor,'<',endCode));
            break;

          default:
            wa.push(where(valor,'==',formulario.controls[valor].value));
            break;
        }
          
      }
    });

    const refq = query(mazoRef, ...wa);
    return collectionData(refq, { idField: 'id'}) as Observable<Mazos[]>;

  }

  async getDeckById( id: string): Promise<Mazos>{

    //var res = this.http.get(this.url_api + "/getOne/" + id, this.httpOptions) as Observable<Mazos>;
    
    return new Promise<Mazos>((resolve, reject) => {
      this.http.get<Mazos>(this.url_api + "/getOne/" + id, this.httpOptions) 
      .subscribe(
        async (mazo) => {
        this.mazo = JSON.parse(JSON.stringify(mazo));
        let resultado1 = await this.rellenarHeroes();
        let resultado2 = await this.rellenarSlots();
        resolve(this.mazo);
        },
        (error) => {
          reject(error);
        }
      )
    })
    
  }

  async rellenarHeroes(){
    let heroes: any[] = [];
    heroes.pop();

    const data2 = (this.cardService.getCardsByCode(this.mazo.heroes.map( o => o.code ).toString()));
    data2.subscribe( data => {
      data.forEach( (heroe1, index) => {
        Object.defineProperty(heroe1, 'copias', {
          value: Object.values(this.mazo.heroes)[index].copias,
          writable: true,
          enumerable: true
        })
        heroes.push(heroe1);
      });
      this.mazo.heroes = heroes;
    });

  }

  async rellenarSlots(){
    let cartas: any[] = [];
    cartas.pop();
    let posicion = 0;
    const tamanyo = Object.keys(this.mazo.slots).length;
    let resta = Object.keys(this.mazo.slots).length;
    let slots:any = JSON.parse(JSON.stringify(this.mazo.slots));
    
    while(resta > 0){

      const data3 = await firstValueFrom(
        this.cardService.getCardsByCode(this.mazo.slots.map( o => o.code ).slice(posicion, posicion + 10).toString())
      );

      data3.forEach( (carta1, index) => {
        Object.defineProperty(carta1, 'copias', {
          value: Object.values(this.mazo.slots)[index].copias,
          writable: true,
          enumerable: true
        })
        cartas.push(carta1);

      });
      posicion += 10;
      resta -= posicion;
      
    }
    cartas.sort((a,b) => { 
        return a.type_code.localeCompare(b.type_code);
    });
    this.mazo.slots = cartas;
    
  }

  

}
