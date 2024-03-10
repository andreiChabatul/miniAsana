import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EStatus } from 'src/types/task';

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


}
