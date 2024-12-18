import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-testing';
 tab:string="";

 
 button1(){
  this.tab="info";
}
button2(){
  this.tab="privacy";
}
button3(){
  this.tab="service";
}
button4(){
  this.tab="user";
}
}
