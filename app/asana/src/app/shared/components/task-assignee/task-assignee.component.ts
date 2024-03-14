import { Component, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { USERS } from 'src/fakeDB/data/users';
import { TasksServices } from '../../services/tasks.services';


@Component({
  selector: 'app-task-assignee',
  templateUrl: './task-assignee.component.html',
  styleUrl: './task-assignee.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskAssigneeComponent implements OnChanges {

  @Input() assignee?: string[];
  @Input() id: string;
  USERS = USERS;
  assigneeForm: FormControl;
  assigneeList: string[] = Object.keys(this.USERS);

  constructor(private taskServices: TasksServices) { }

  ngOnChanges(): void {
    this.assigneeForm = new FormControl(this.assignee);
    this.assigneeForm.valueChanges
      .subscribe(assignee => this.taskServices.updateTask(this.id, { assignee }));
  }

}
