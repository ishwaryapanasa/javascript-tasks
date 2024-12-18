import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Authservice } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";

export interface deactivate{
    canexit:()=> boolean|Observable<boolean>|Promise<boolean>
}

@Injectable({
    providedIn:'root'
})


export class Authguardservice implements CanActivate,CanActivateChild,CanDeactivate<deactivate>{
    authservice:Authservice=inject(Authservice)
    router:Router=inject(Router)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean| Observable<boolean>| Promise<boolean>
    {
      if(this.authservice.isauthenticate()){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false;
      }

    }
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
}
canDeactivate(component:deactivate,currentroute:ActivatedRouteSnapshot,currentstate: RouterStateSnapshot,nextState:RouterStateSnapshot){
     return component.canexit();
}
}