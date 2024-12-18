import { inject } from "@angular/core";
import { Authservice } from "./Services/auth.service";
import { Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";


;
export const canactivate= () =>{
    const authservice=inject(Authservice);
    const router = inject(Router)
    if(authservice.isauthenticate()){
        return true;
      }else{
        router.navigate(['/login'])
        return false;
      }

}
export const canactivatechild = () =>{
    canactivate();
}
export const canDeactivate=((comp:ContactComponent)=>{return comp.canexit()})

