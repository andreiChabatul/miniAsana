import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewTask } from 'src/store/actions/tasks.actions';
import { AppStore } from 'src/types/store';
import { TasksServices } from '../../../shared/services/tasks.services';

@Component({
  selector: 'app-header-tasks',
  templateUrl: './header-tasks.component.html',
  styleUrl: './header-tasks.component.scss'
})
export class HeaderTasksComponent {

  constructor(private store: Store<AppStore>, private tasksServices: TasksServices) { }


  openNewTask() {
    this.store.dispatch(addNewTask({ isNnewTask: true }))
  }

  refreshTask() {
    this.tasksServices.getAllTasks();
  }

}
