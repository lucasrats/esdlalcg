import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
      .then( () => {
        this.router.navigate(['/registro'])
      })
      .catch( error => console.log(error));
  }

}
