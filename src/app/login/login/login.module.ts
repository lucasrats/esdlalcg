import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
