import { Component } from '@angular/core';
import { deactivate } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements deactivate {
firstname:string=''
lastname:string=''
country:string='usa'
message:string='';

issbumitted:boolean=false;
onsubmit(){
  this.issbumitted=true;
}
canexit(){
  if((this.firstname||this.lastname||this.message) && !this.issbumitted){
     return confirm('You have unsaved changes. Do you really want to navigate away');
  } else{
    return true;
  }
}

}
