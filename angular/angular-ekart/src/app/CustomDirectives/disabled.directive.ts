import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }




@Input() set appDisabled(disable: Boolean){
  if(disable){
    this.renderer.addClass(this.element.nativeElement,'disable-out-of-stock-product');

    

  }


}}