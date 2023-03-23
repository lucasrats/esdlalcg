import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MazoService } from '../../services/mazo.service';

@Component({
  selector: 'app-mazos',
  templateUrl: './mazos.component.html',
  styleUrls: ['./mazos.component.css']
})
export class MazosComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(
    private mazoService: MazoService,
    private router: Router
    ) {}

  enviarUrl(urlMazo: string){

    const urlapi = 'https://ringsdb.com/api/public/decklist/';
    urlMazo = 'https://ringsdb.com/viewdecklist//35634/core1-2.0';

    this.mazoService.urlApiMazo = urlapi + urlMazo.split("/")[5];

    console.log(this.mazoService.urlApiMazo);
    
    this.router.navigate(['mazos/importar']);

  }

}

