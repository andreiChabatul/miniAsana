import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  onDate(event: MatDatepickerInputEvent<any, any>): void {
    console.log(event.value )
  }

}
