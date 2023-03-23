import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private userService: UserService
  ) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      nickname: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    const response = await this.userService.addUser(this.formulario.value);
  }

}
