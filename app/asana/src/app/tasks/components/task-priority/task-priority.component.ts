import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EPriority } from 'src/types/task';

@Component({
  selector: 'app-task-priority',
  templateUrl: './task-priority.component.html',
  styleUrl: './task-priority.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskPriorityComponent {

  priorityAll: EPriority[] = Object.values(EPriority);
  @Input() id: string;
  @Input() priority?: EPriority;

}
