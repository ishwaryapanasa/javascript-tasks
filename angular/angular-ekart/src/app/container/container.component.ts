import { Component, Input, ViewChild } from '@angular/core';
import { PlistComponent } from './plist/plist.component';

@Component({
  selector: 'cont',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  
  searchText:string="";

  @ViewChild(' PlistComponent') productlistcomponent: PlistComponent;


  searchtextchanged(value:string){
this.searchText=value;
  }


}
