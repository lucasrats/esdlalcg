import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  //alertVerificationMail: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    //this.alertVerificationMail = this.userService.getAlertVerificationMail();
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.authService.login(this.formLogin.value)
      .then( response => {
        this.router.navigate(['inicio']);
      })
      .catch(error => console.log(error));
  }

  onClick(){
    this.authService.loginWithGoogle()
      .then( response => {
        this.router.navigate(['inicio']);
      })
      .catch( error => console.log(error));
  }

}
