import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-date',
  templateUrl: './task-date.component.html',
  styleUrls: ['./task-date.component.scss']
})
export class TaskDateComponent {

  @Input() deadline?: Date;
  @Input() id: string;

}
