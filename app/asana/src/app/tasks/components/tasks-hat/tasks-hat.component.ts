import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-hat',
  templateUrl: './tasks-hat.component.html',
  styleUrl: './tasks-hat.component.scss'
})
export class TasksHatComponent {

  hatTitle = ['№', '', 'Task name', 'Deadline', 'Assignee', 'Status', 'Priority', '']

}
