import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrl: './task-control.component.scss'
})
export class TaskControlComponent {

  @Input() id: string;

}
