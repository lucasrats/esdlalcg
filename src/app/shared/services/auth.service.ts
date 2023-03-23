import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider,
          sendEmailVerification, onAuthStateChanged, getAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any; // Save logged in user data
  private alertVerificationMail: boolean = false;

  constructor(
    private fireauth: Auth,
    public router: Router
  ) {

    /* nos suscribimos al cambio de estado para grabar/limpiar en sesion del navegador */
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('uid', JSON.stringify(user.uid));
        JSON.parse(localStorage.getItem('uid')!);
        
        this.userData = user;
      } else {
        localStorage.setItem('uid', 'null');
        JSON.parse(localStorage.getItem('uid')!);
        this.userData = null;
      }
    });

  }

    setAlertVerificationMail( valor: boolean){
      this.alertVerificationMail = valor;
    }

    getAlertVerificationMail(): boolean {
      return this.alertVerificationMail;
    }

    register({ email, password}: any){
      return createUserWithEmailAndPassword(this.fireauth, email, password);
    }
  
    sendEmailVerification( user: any): any{
      return sendEmailVerification( user );
    }
  
    login({ email, password}: any){
      return signInWithEmailAndPassword(this.fireauth, email, password);
    }
  
    loginWithGoogle(){
      return signInWithPopup(this.fireauth, new GoogleAuthProvider());
    }
  
    logout(){
      return signOut(this.fireauth);
    }
  
}