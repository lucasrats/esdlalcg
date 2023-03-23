import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

//Modulos propios
import { LoginModule } from './login/login/login.module';
import { CartasModule } from './cartas/cartas.module';
import { RetosModule } from './retos/retos.module';
import { MazosModule } from './mazos/mazos.module';

//Servicios propios
import { AuthService } from './shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    LoginModule,
    CartasModule,
    RetosModule,
    MazosModule,
    NgbModule,
    PipesModule
  ],
  providers: [
    //ScreenTrackingService,
    //UserTrackingService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
