import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Highlights]'
})
export class HighlightsDirective {

  constructor( private element:ElementRef,private renderer:Renderer2) { }


  @HostListener('mouseenter') onmouseenter(){
    this.renderer.addClass(this.element.nativeElement, 'product-card:hover');
  }
  @HostListener('mouseout') onmouseout(){
    this.renderer.removeClass(this.element.nativeElement, 'product-card:hover');
  }
}
