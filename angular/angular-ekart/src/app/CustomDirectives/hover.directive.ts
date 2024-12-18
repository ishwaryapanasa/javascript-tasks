import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Hover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  
  @HostBinding('style.background')backgroundColor:string= "#282828";
  @HostBinding('style.border')border:string= 'none';
  @HostBinding('style.color')textcolor:string = "white";

  @HostListener('mouseout') onmouseout(){
    this.backgroundColor='#282828';
    this.textcolor='white';
    this.border='#282828';
  }

  @HostListener('mouseenter') onmouseenter(){
    this.backgroundColor='white';
    this.textcolor='#282828';
    this.border='#282828 3px solid';
  }
}
