import { NgModule } from "@angular/core";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './home/popular/popular.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { Authservice } from "./Services/auth.service";
import { CheckoutComponent } from "./checkout/checkout.component";
import { Authguardservice } from "./Services/authguard.service";
import { canactivate, canactivatechild, canDeactivate } from "./authguard";





const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'Home', component: HomeComponent},
    {path:'About',component: AboutComponent},
    {path:'contact',component: ContactComponent,canDeactivate:[canDeactivate]},
    {path:'courses',component: CoursesComponent},
    //{path:'courses/course/:id',component:CourseDetailComponent},
    {path:'courses', canActivateChild:[canactivatechild], children:[
      {path:'course/:id',component:CourseDetailComponent},
      {path:'popular',component:PopularComponent},
      {path:'checkout',component:CheckoutComponent}
    ]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotFoundComponent}
    
  ]
@NgModule({
imports:[
RouterModule.forRoot(routes)
],
exports:[
    RouterModule
]
})
export class routingmodule{}