import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {
data:any[]=['task1','task2','task3'];



taskservice:TaskService=inject(TaskService);

ngOnInit(){
this.taskservice.createtask.subscribe((val:string)=>
  this.data.push(val)
)
}}
