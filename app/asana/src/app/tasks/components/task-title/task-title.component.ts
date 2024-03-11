import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskTitleComponent {

  @Input() title: string;
  @Input() id: string;

}
