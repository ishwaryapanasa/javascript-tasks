import { Component,OnInit } from '@angular/core';
import { user } from '../../../CustomDirectives/model/models';
import { UserService } from '../../../Services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit  {
  selecteduser!:user;
 
constructor(private userservice:UserService){

}
ngOnInit() {
  this.userservice.showdetails.subscribe((data: user|null) => {
    if(data)
      this.selecteduser=data
  });
}

}

  

  



