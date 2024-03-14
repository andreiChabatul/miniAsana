import { Component, Input } from '@angular/core';
import { TasksServices } from '../../services/tasks.services';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.scss'
})
export class TaskDeleteComponent {

  @Input() id: string;

  constructor(private tasksServices: TasksServices) { }

  deleteTask(): void {
    this.tasksServices.deleteTask(this.id);
  }

}
