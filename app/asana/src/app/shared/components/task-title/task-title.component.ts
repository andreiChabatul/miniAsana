import { Component, Input, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { TasksServices } from '../../services/tasks.services';


@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TaskTitleComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() id: string;
  titleForm: FormControl;
  subscription$: Subscription;

  constructor(private tasksServices: TasksServices) { }

  ngOnInit(): void {
    this.titleForm = new FormControl(this.title);
    this.subscription$ = this.titleForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(title => this.tasksServices.updateTask(this.id, { title }));
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
