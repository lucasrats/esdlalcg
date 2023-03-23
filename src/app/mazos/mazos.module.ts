import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListaMazosComponent } from './components/lista-mazos/lista-mazos.component';
import { ImportarMazoComponent } from './components/importar-mazo/importar-mazo.component';
import { CrearMazoComponent } from './pages/crear-mazo/crear-mazo.component';
import { MazosComponent } from './pages/mazos/mazos.component';
import { PipesModule } from '../pipes/pipes.module';
import { MiniBuscadorComponent } from './components/mini-buscador/mini-buscador.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { MisMazosComponent } from './pages/mis-mazos/mis-mazos.component';
import { VerMazoComponent } from './pages/ver-mazo/ver-mazo.component';
import { ListaActualComponent } from './components/lista-actual/lista-actual.component';




@NgModule({
  declarations: [
    ListaMazosComponent,
    ImportarMazoComponent,
    CrearMazoComponent,
    MazosComponent,
    MiniBuscadorComponent,
    MisMazosComponent,
    VerMazoComponent,
    ListaActualComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbToastModule
  ],
  exports: [
    CrearMazoComponent,
    ImportarMazoComponent,
    ListaMazosComponent
  ]
})
export class MazosModule { }
