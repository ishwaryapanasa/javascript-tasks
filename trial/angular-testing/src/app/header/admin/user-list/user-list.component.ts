import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { user } from '../../../CustomDirectives/model/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
 
})
  
  
export class UserListComponent {
  userlist: any[];

  constructor(private userservice: UserService) {
    this.userlist = this.userservice.GetAllUsers();
  }

  show(user:user){
this.userservice.updateUserDetails(user);
  }
}


