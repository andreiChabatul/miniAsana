import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/types/task';

@Component({
  selector: 'app-task-panel-item',
  templateUrl: './task-panel-item.component.html',
  styleUrl: './task-panel-item.component.scss'
})
export class TaskPanelItemComponent implements OnInit {


  @Input() tasks: ITask[];
  @Input() title: string;

  panelOpenState: boolean;

  ngOnInit(): void {
    this.panelOpenState = true;
  }

}
