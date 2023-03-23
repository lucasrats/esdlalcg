import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    //private userService: UserService,
    private router: Router,
    private authService: AuthService
    ) {
      this.formReg = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      });
   }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authService.register(this.formReg.value)
      .then(response => {
        // cuando registramos desde Firebase Auth con user y pass, nos devolverá un emailVerified=false, que utilizaremos para no permitir aún la entrada al
        // usuario hasta que no haya verificado el mail. Para evitar problemas futuros en que si inicia sesión con Google se le borre la pass
        if(!response.user.emailVerified){
          this.authService.sendEmailVerification(response.user);
          this.authService.logout();
        }
        //enviar comingRegister para mostrar alerta en pantalla del login de que tiene que activar la cuenta y tal
        //this.authService.setAlertVerificationMail(true);

        this.router.navigate(['/login']);
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
