import { Component, ElementRef, OnChanges, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addNewTask } from 'src/store/actions/tasks.actions';
import { AppStore } from 'src/types/store';
import { EPriority, EStatus, ITask } from 'src/types/task';
import { TasksServices } from '../../../shared/services/tasks.services';
import { fieldTaskSort } from 'src/types/app';
import { dayType } from '../task-wrapper/data/deadline.sort';
import { aferDaytomorrow, eightDay, sixDay, today, tomorrow } from '../../../shared/const/date';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrl: './task-new.component.scss'
})
export class TaskNewComponent implements OnChanges {

  @Input() newButton?: boolean;
  @ViewChild('inputNew', { static: true }) input: ElementRef;
  @Input() title?: string;
  task: Partial<ITask>;
  newTask: FormControl = new FormControl();
  subscription$: Subscription;


  constructor(private store: Store<AppStore>, private taskServices: TasksServices) { }

  ngOnChanges(): void {
    if (this.newButton) this.input.nativeElement.focus();
  }

  lostfocus(): void {
    if (this.newTask.value) this.taskServices.addTask({ title: this.newTask.value, ...this.fillTask() });
    this.store.dispatch(addNewTask({ isNnewTask: false }));
  }

  fillTask(): Partial<ITask> {
    if (this.title) {
      const [field, value] = this.title.toLowerCase().split(':') as [fieldTaskSort, EStatus | EPriority | dayType];
      if (field === 'priority') return { priority: value.trim() as EPriority };
      if (field === 'status') return { status: value.trim() as EStatus };
      if (field === 'deadline') {
        const day = (): Date | undefined => {
          switch (value.trim() as dayType) {
            case 'today':
              return today;
            case 'tomorrow':
              return tomorrow;
            case 'day after tomorrow':
              return aferDaytomorrow;
            case 'in week':
              return sixDay;
            case 'later':
              return eightDay;
            default:
              return undefined;
          }

        }
        return { deadline: day() }
      }



    }
    return {}
  }

}
