import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { USERS } from 'src/fakeDB/users';
import { IProfile } from 'src/types/task';
import { EMPTY_FOTO } from './const/empty';

@Component({
  selector: 'app-task-assignee',
  templateUrl: './task-assignee.component.html',
  styleUrl: './task-assignee.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskAssigneeComponent implements OnInit{

  @Input() assignee?: IProfile[];
  @Input() id: string;

  assigneeEmpty: IProfile = {
    name: 'None',
    image: EMPTY_FOTO
  }
  assigneeForm: FormControl;
  assigneeList: IProfile[] = [this.assigneeEmpty, ...USERS];

ngOnInit(): void {
  this.assigneeForm = new FormControl(this.assignee || [this.assigneeEmpty]);
}

}
