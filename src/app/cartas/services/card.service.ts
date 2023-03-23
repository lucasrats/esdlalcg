import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { collectionData, Firestore, getFirestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs, QueryConstraint } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Cartas, Cartas_constructor } from '../interfaces/carta.interface';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getCardByCode( code: String){
    const cardRef = collection(this.firestore, 'cartas');
    const wa:QueryConstraint[] = [];

    wa.push(where('code','==',code));
    const refq = query(cardRef, ...wa);
    return collectionData(refq, { idField: 'id'}) as Observable<Cartas[]>;

  }

  getCardsByCode( code: String){

    /*
    const cardRef = collection(this.firestore, 'cartas');
    const wa:QueryConstraint[] = [];

    wa.push(where('code','in', code));
    const refq = query(cardRef, ...wa);
    return collectionData(refq, { idField: 'id'}) as Observable<Cartas[]>;
    */

    let url = "http://localhost:3000/api/carta/getCardsByCode/" + code;
    return this.http.get(url, this.httpOptions) as Observable<Cartas[]>;

  }

  getAllCards(){

    const cardRef = collection(this.firestore, 'cartas');
    const refq = query(cardRef);
    return collectionData(refq, { idField: 'id'}) as Observable<Cartas[]>;

  }

  getAllCardsConstructor(){

    /*
    const cardRef = collection(this.firestore, 'cartas');
    const refq = query(cardRef);
    return collectionData(refq, { idField: 'id'}) as Observable<Cartas_constructor[]>;
    */

    let url = "http://localhost:3000/api/carta/getAll";
    return this.http.get(url, this.httpOptions) as Observable<Cartas_constructor[]>;

  }

  getCards( formulario: FormGroup){

    const cardRef = collection(this.firestore, 'cartas');
    const wa:QueryConstraint[] = [];

    Object.keys(formulario.controls).forEach( valor => {
      
      if(formulario.controls[valor].value != null && formulario.controls[valor].value != ''){
        
        switch(valor){
          case 'name':
          case 'text':
          case 'flavor':
            let searchTerm = formulario.controls[valor].value;
            let strlength = searchTerm.length;
            let strFrontCode = searchTerm.slice(0, strlength-1);
            let strEndCode = searchTerm.slice(strlength-1, searchTerm.length);
            // This is an important bit..
            let endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

            wa.push(where(valor,'>=',searchTerm));
            wa.push(where(valor,'<',endCode));
            break;

          case 'sphere_code':
            wa.push(where(valor,'in',formulario.controls[valor].value));
            break;

          case 'type_codes_minib':
              formulario.controls[valor].value.forEach((element: any)  => {
                wa.push(where(valor,'==', element));
              });
            break;
          
          case 'ocost':
          case 'othreat':
          case 'owillpower':
          case 'oattack':
          case 'odefense':
          case 'ohealth':
            break;

          case 'cost':
            wa.push(where(valor,formulario.controls['ocost'].value,formulario.controls[valor].value));
            break;

          case 'traits':
            wa.push(where(valor,'array-contains',formulario.controls[valor].value));
            break;


          default:
            wa.push(where(valor,'==',formulario.controls[valor].value));
            break;
        }
          
      }
    });

    const refq = query(cardRef, ...wa);
    return collectionData(refq, { idField: 'id'}) as Observable<Cartas[]>;

  }

}
