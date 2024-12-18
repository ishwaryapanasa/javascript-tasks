import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
constructor(private userservice:UserService){

}
name:string="";
gender:string='male';
subtype:string='yearly';
status:string='active';
createuser(){
  this.userservice.CreateUser(this.name,this.gender,this.subtype,this.status);
}
}
