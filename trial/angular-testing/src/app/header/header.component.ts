import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private subservice:SubscribeService){

  }
  selectedTab:string="";

  HomeClicked(){
    this.selectedTab='home';
  }
AdminClicked(){
  this.selectedTab='admin'
}
onsubscribeheader(){
  this.subservice.onsubscribe();
}

}
