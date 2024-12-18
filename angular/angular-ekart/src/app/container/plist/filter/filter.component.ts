import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
All:number=0;
@Input()
Instock:number=0;
@Input()
outofstock:number=0;

@Output()
buttonchanged:EventEmitter<string>=new EventEmitter<string>();

onbuttonchanged(){
  this.buttonchanged.emit(this.selectedoption);

  
}

selectedoption:string="All";
}
