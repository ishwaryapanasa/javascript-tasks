import { Component, Input } from '@angular/core';
import { product} from './../../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:product;
}
