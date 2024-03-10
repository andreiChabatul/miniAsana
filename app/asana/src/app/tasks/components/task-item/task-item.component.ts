import { Component, Input } from '@angular/core';
import { ITask } from 'src/types/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() index: number;
  @Input() task: ITask;

}
