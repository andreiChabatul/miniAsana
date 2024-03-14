import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EPriority } from 'src/types/task';
import { TasksServices } from '../../services/tasks.services';

@Component({
  selector: 'app-task-priority',
  templateUrl: './task-priority.component.html',
  styleUrl: './task-priority.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskPriorityComponent  {

  priorityAll: EPriority[] = Object.values(EPriority);
  @Input() id: string;
  @Input() priority?: EPriority;

  constructor(private tasksServices: TasksServices) { }

  selectPriority() {
    this.tasksServices.updateTask(this.id, { priority: this.priority });
  }

}
