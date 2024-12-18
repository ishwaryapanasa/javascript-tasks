import { Component, Input } from '@angular/core';
import { product } from '../../models/product';
import { PlistComponent } from '../plist/plist.component';

@Component({
  selector: 'pdetail',
  templateUrl: './pdetail.component.html',
  styleUrl: './pdetail.component.css'
})
export class PdetailComponent {

@Input()
productlistcomp:PlistComponent=undefined;
product:product;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.product=this.productlistcomp.selectedproduct;
}


}
