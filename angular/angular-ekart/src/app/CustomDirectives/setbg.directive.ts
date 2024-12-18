import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Setbg]'
})
export class SetbgDirective implements OnInit{

  @Input() backColor:string="red" ;
  @Input() textcolor:string='white';

  constructor( private element:ElementRef, private renderer:Renderer2) { 
 
    
    
}
ngOnInit(){
  this.renderer.setStyle(this. element.nativeElement, 'backgroundColor', ' this.backColor');
  this.renderer.setStyle(this.element.nativeElement, 'color','this.textcolor');
}
}