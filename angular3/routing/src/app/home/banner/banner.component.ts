import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  router:Router=inject(Router)
  onsearchclicked(value:string){
  
    this.router.navigate(['/courses'], {queryParams:{search:value}});
  }
}
