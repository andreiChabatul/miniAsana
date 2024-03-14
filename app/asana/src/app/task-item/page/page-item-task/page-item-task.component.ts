import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TasksServices } from 'src/app/shared/services/tasks.services';
import { selectTaskId } from 'src/store/selectors';
import { AppStore } from 'src/types/store';
import { ITask } from 'src/types/task';

@Component({
  selector: 'app-page-item-task',
  templateUrl: './page-item-task.component.html',
  styleUrl: './page-item-task.component.scss'
})
export class PageItemTaskComponent implements OnInit {

  task$: Observable<ITask | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppStore>, private tasksServices: TasksServices) { }

  ngOnInit(): void {
    this.tasksServices.getAllTasks();
    this.route.queryParams.subscribe(async (params) =>
      this.task$ = this.store.select(selectTaskId({ id: params['id'] }))
    );
  }

}
