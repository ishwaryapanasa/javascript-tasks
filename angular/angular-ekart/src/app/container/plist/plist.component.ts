import { Component,Input } from '@angular/core';
import { product } from '../../models/product';

@Component({
  selector: 'plist',
  templateUrl: './plist.component.html',
  styleUrl: './plist.component.css'
})
export class PlistComponent {
  selectedproduct:product;
   shoeProducts = [
    { name: "Running Shoe A", price: 59.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 10 },
    { name: "Casual Sneaker B", price: 49.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 15 },
    { name: "Dress Shoe C", price: 89.99, inStock: false, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 20 },
    { name: "Hiking Boot D", price: 120.00, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 5 },
    { name: "Soccer Cleat E", price: 74.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 10 },
    { name: "Basketball Shoe F", price: 89.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 25 },
    { name: "Sandals G", price: 29.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 30 },
    { name: "Winter Boot H", price: 150.00, inStock: false, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 15 },
    { name: "Loafers I", price: 65.00, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 20 },
    { name: "Flip Flops J", price: 19.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 10 },
    { name: "Climbing Shoe K", price: 99.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 5 },
    { name: "Skate Shoe L", price: 74.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 15 },
    { name: "Ankle Boot M", price: 79.99, inStock: false, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 20 },
    { name: "Platform Shoe N", price: 69.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 10 },
    { name: "Athletic Shoe O", price: 55.00, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 25 },
    { name: "Fashion Sneaker P", price: 59.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 30 },
    { name: "Boots Q", price: 110.00, inStock: false, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 15 },
    { name: "Ballet Flats R", price: 39.99, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 5 },
    { name: "Running Shoe S", price: 75.00, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 20 },
    { name: "Sneaker T", price: 45.00, inStock: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD_TKxWcV_pucA14r0P5QJ7cNqWwyFGBXZQ&s", discount: 15 }
];

totalproducts=this.shoeProducts.length
totalinstock=this.shoeProducts.filter(p => p.inStock === true).length
totaloutofstock=this.shoeProducts.filter(p => p.inStock === false).length

selectoption:string="All";
@Input()
searchText:string="";

filteroption(value:string){
  this.selectoption=value;


}



}
