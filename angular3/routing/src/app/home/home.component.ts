import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  activeroute:ActivatedRoute=inject(ActivatedRoute)
ngOnInit(){
 this.activeroute.fragment.subscribe((data) =>{
this.jump(data);
 })
}
 jump(section){
   document.getElementById(section).scrollIntoView({behavior:'smooth'})
 
}
}
