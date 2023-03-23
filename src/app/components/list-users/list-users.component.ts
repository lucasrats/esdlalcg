import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/interfaces/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
  ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( usuarios => {
      this.users = usuarios;
    })
  }

  async onClickDelete(user: User){
    const response = await this.userService.deleteUser(user);
    
  }

}
