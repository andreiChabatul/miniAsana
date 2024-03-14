import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { TasksServices } from '../../services/tasks.services';

@Component({
  selector: 'app-task-description',
  templateUrl: './task-description.component.html',
  styleUrl: './task-description.component.scss'
})
export class TaskDescriptionComponent implements OnInit, OnDestroy {

  @Input() description?: string;
  @Input() id: string;
  descForm: FormControl;
  subscription$: Subscription;

  constructor(private tasksServices: TasksServices) { }

  ngOnInit(): void {
    this.descForm = new FormControl(this.description || '');
    this.subscription$ = this.descForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(description => this.tasksServices.updateTask(this.id, { description }));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
