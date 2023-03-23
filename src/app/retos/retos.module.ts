import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { ListaRetosComponent } from './components/lista-retos/lista-retos.component';
import { CrearRetoComponent } from './components/crear-reto/crear-reto.component';


@NgModule({
  declarations: [
    ListaRetosComponent,
    CrearRetoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ListaRetosComponent,
    CrearRetoComponent
  ]
})
export class RetosModule { }
