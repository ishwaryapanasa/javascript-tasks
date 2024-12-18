import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TaskService{
//createtask:EventEmitter<string>=new EventEmitter<string>();

createtask=new Subject();


showevent(val:string)
{
    this.createtask.next(val);
}
}