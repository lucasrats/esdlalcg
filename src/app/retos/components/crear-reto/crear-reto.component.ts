import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { query, QueryConstraint, where } from 'firebase/firestore';
import { RetoService } from '../../services/reto.service';

@Component({
  selector: 'app-crear-reto',
  templateUrl: './crear-reto.component.html',
  styleUrls: ['./crear-reto.component.css']
})
export class CrearRetoComponent implements OnInit {

  formulario: FormGroup;

  constructor( 
    private retoService: RetoService,
    private router: Router) { 

    this.formulario = new FormGroup({
      name: new FormControl(),
      date_start: new FormControl(),
      date_end: new FormControl(),
      description: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
    
    this.retoService.addReto(this.formulario.value)
    .then(response => {
      this.router.navigate(['/retos']);
    });

  }

}
