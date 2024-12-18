import { user } from "../CustomDirectives/model/models";
import { EventEmitter, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService{
     users:user[]=[
       
        new user('ishwarya','female','yearly','active'),
        new user('rohith','male','monthly','active'),
        new user('ammu','female','quarterly','inactive')
     ];
     constructor(private loggermsg:LoggerService){}
    ondetailsclicked:EventEmitter<user>=new EventEmitter<user>();
    private userDetailsSubject = new BehaviorSubject<user |null>(null);
    showdetails = this.userDetailsSubject.asObservable();
    
  // Method to update the user details
  updateUserDetails(value: user) {
    this.userDetailsSubject.next(value);}



   
     GetAllUsers(){
        return this.users;
     }
     CreateUser(name:string,gender:string,subtype:string,status:string){
        let User=new user(name,gender,subtype,status)
        this.users.push(User);
        this.loggermsg.logger(name,subtype);
     }

}