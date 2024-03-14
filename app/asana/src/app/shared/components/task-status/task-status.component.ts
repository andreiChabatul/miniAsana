import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EStatus } from 'src/types/task';
import { TasksServices } from '../../../shared/services/tasks.services';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskStatusComponent {

  statusAll: EStatus[] = Object.values(EStatus);
  @Input() id: string;
  @Input() status: EStatus;

  constructor(private tasksServices: TasksServices) { }


  selectStatus() {
    this.tasksServices.updateTask(this.id, { status: this.status });
  }


}
