import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCartasComponent } from './components/lista-cartas/lista-cartas.component';
import { VerCartaComponent } from './components/ver-carta/ver-carta.component';
import { BuscadorCartasComponent } from './components/buscador-cartas/buscador-cartas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartasComponent } from './pages/cartas/cartas.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    ListaCartasComponent,
    VerCartaComponent,
    BuscadorCartasComponent,
    CartasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbTooltipModule,
    NgbToastModule
  ],
  exports: [
    BuscadorCartasComponent,
    ListaCartasComponent,
    VerCartaComponent
  ]
})
export class CartasModule { }
