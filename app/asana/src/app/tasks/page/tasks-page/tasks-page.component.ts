import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTasks } from 'src/store/selectors';
import { AppStore } from 'src/types/store';
import { ITask } from 'src/types/task';
import { TasksServices } from '../../../shared/services/tasks.services';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tasks$: Observable<ITask[]> = this.store.select(selectTasks);

  constructor(private store: Store<AppStore>, private taskServices: TasksServices) { }

  ngOnInit(): void {
    this.taskServices.getAllTasks();
  }

}
