import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef,private renderer:Renderer2 ) { }

  @Input() set appStyle(style : Object){
    let styles=Object.entries(style);
    for(let item of styles){
      let[cssstyle,value]=item
      this.renderer.setStyle(this.element.nativeElement, cssstyle,value)
    
    }
  }

}
