import { Injectable } from '@angular/core';
import { query } from '@angular/fire/database';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Reto } from '../interfaces/reto.interface';

@Injectable({
  providedIn: 'root'
})
export class RetoService {

  constructor(
    private firestore: Firestore,
  ) { }

  addReto( reto: Reto){
    const retoRef = collection(this.firestore, 'retos');
    
    return addDoc(retoRef, reto);

  }

  getRetos(){

    const retoRef = collection(this.firestore, 'retos');
    return collectionData(retoRef, { idField: 'id'}) as Observable<Reto[]>;

  }
}
