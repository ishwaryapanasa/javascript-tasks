import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  AsyncSubject, BehaviorSubject, filter, from, fromEvent, map, Observable, of, ReplaySubject,} from 'rxjs';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-observables';

  ngOnInit(){
const subject = new AsyncSubject<number>();

subject.subscribe((data:number) => {console.log("subscriber1:" +data)});
subject.subscribe((data:number) =>  {console.log("ssubscriber2:" +data)});
subject.next(2020);
subject.subscribe((data:number) =>{console.log("ssubscriber3:" +data)});
subject.next(2023);

subject.complete();

}}


//mapobs=this.myobs.pipe(map((val) =>{
  //return val*2;
//}))
//filterobs=this.mapobs.pipe(filter((val) =>{
//  return val % 4 ===0;
//})

//getdata(){
  ////this.filterobs.subscribe((val:any) =>{
   // this.data.push(val);
  
 // })


  //@ViewChild('buttonclick') createbtn:ElementRef;

  //buttonclicked(){
  // this.createBtn=fromEvent(this.createbtn.nativeElement, 'click').subscribe((data)=>{
   // console.log(data);
  // })}
 //ngAfterViewInit(){
  //this.buttonclicked()
 //}

 //showdata(){
 //let div= document.createElement('div');
 //div.innerText="item";
 //document.getElementById('container').appendChild(div);
 //
 

