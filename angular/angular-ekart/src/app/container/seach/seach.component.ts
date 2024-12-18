import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrl: './seach.component.css'
})
export class SeachComponent {
  searchText:string="";
 
@Output()
  
selectedinput:EventEmitter<string>=new EventEmitter<string>

 @ViewChild('searchinput') searchinput:ElementRef
 
 

updatesearch(){
  this.searchText=this.searchinput.nativeElement.value;
  this.selectedinput.emit(this.searchText);

}
}
