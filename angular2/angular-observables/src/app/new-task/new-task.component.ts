import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
data:string="";

taskservice:TaskService=inject(TaskService);
onclicked(){
  this.taskservice.showevent(this.data);
}
}
