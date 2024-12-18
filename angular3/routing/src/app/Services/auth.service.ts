import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class Authservice  {
islogged:boolean=false;
userservice:UserService=inject(UserService)

login(username:string, password:string){
 let user = this.userservice.users.find((u) => u.username===username && u.password === password)

 if(user===undefined){
    this.islogged=false;
 }else{
    this.islogged=true;
 }
 return user;
}
logout(){
    this.islogged=false;
}  

isauthenticate(){
return this.islogged;
}
    
}
    

