import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { FormsModule } from '@angular/forms';
import { ServicesService } from './Services/services.service';
import { CourseService } from './Services/course.service';
import { UserService } from './Services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { routingmodule } from './routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    ServicesComponent,
    TestimonyComponent,
    CoursesComponent,
    ContactComponent,
    CheckoutComponent,
    AboutComponent,
    CourseDetailComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routingmodule
   
    
  ],
  providers: [ServicesService,CourseService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
