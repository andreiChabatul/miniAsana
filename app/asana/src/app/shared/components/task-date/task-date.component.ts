import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TasksServices } from '../../services/tasks.services';


@Component({
  selector: 'app-task-date',
  templateUrl: './task-date.component.html',
  styleUrls: ['./task-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskDateComponent {

  @Input() deadline?: Date;
  @Input() id: string;
  date: Date;

  constructor(private tasksServices: TasksServices) { }

  onDate(event: MatDatepickerInputEvent<any, any>): void {
    this.tasksServices.updateTask(this.id, { deadline: event.value });
  }

}
