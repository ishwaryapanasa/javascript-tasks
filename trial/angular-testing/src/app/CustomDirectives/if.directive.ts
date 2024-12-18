import { Directive, TemplateRef, ViewContainerRef,Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private view:TemplateRef<any>,private template:ViewContainerRef) { }

}
