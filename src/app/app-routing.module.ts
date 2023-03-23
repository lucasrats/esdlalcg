import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { RegisterComponent } from './login/login/register/register.component';
import { LoginComponent } from './login/login/login/login.component';
import { MainComponent } from './login/login/main/main.component';
import { BuscadorCartasComponent } from './cartas/components/buscador-cartas/buscador-cartas.component';
import { ListaCartasComponent } from './cartas/components/lista-cartas/lista-cartas.component';
import { VerCartaComponent } from './cartas/components/ver-carta/ver-carta.component';
import { CartasComponent } from './cartas/pages/cartas/cartas.component';

import { ListaRetosComponent } from './retos/components/lista-retos/lista-retos.component';
import { CrearRetoComponent } from './retos/components/crear-reto/crear-reto.component';

import { MazosComponent } from './mazos/pages/mazos/mazos.component';
import { CrearMazoComponent } from './mazos/pages/crear-mazo/crear-mazo.component';
import { ImportarMazoComponent } from './mazos/components/importar-mazo/importar-mazo.component';
import { MisMazosComponent } from './mazos/pages/mis-mazos/mis-mazos.component';
import { ListaMazosComponent } from './mazos/components/lista-mazos/lista-mazos.component';
import { VerMazoComponent } from './mazos/pages/ver-mazo/ver-mazo.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
  { path: 'inicio', component: MainComponent},
  //{ path: 'list-users', component: ListUsersComponent },
  { path: 'create-user', component: CreateUserComponent, ...canActivate( () => redirectUnauthorizedTo( ['/registro'])) },
  //Login-registro
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // -- Cartas --
  //{ path: 'buscador', component: BuscadorCartasComponent },
  { path: 'buscador', component: CartasComponent },
  { path: 'listado', component: ListaCartasComponent },
  { path: 'carta/:id', component: VerCartaComponent },
  // -- Retos --
  { path: 'retos', component: ListaRetosComponent },
  { path: 'reto/crear', component: CrearRetoComponent },
  // -- Mazos --
  { path: 'mazos', component: MazosComponent },
  { path: 'mazos/crear', component: CrearMazoComponent },
  { path: 'mazos/importar', component: ImportarMazoComponent },
  { path: 'mazos/mis-mazos', component: MisMazosComponent },
  { path: 'mazos/lista', component: ListaMazosComponent },
  { path: 'mazos/ver/:id', component: VerMazoComponent },
  
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
