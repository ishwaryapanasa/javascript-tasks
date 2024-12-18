import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Authservice } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router:Router=inject(Router);
  authservice:Authservice=inject(Authservice);
  activeroute:ActivatedRoute=inject(ActivatedRoute)
@ViewChild('username') username:ElementRef;
@ViewChild('password') password:ElementRef;

ngOnInit(){
  this.activeroute.queryParamMap.subscribe((queries)=> {
   const logout= Boolean(queries.get('logout'));
   if(logout){
    this.authservice.logout();
    alert('You are now logged out.islogged= ' + this.authservice.islogged)
    
   }
  })
}
onloginclicked(){
  const username=this.username.nativeElement.value;
  const password=this.password.nativeElement.value;
   const user=this.authservice.login(username,password)
   if(user==undefined){
    alert("The login credentials you have entered are not correct.");
   }else{
    alert('welcome'  + user.name +  'you are logged in.')
    this.router.navigate(['/courses']);
   }
} 

}
