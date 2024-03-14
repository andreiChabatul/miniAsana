import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectAppSetting, selectIsAddNewTask } from 'src/store/selectors';
import { AppStore, IAppStore } from 'src/types/store';
import { ITask, taskSortItem } from 'src/types/task';
import { SortOrderTaskServices } from '../../services/sort.order.service';


@Component({
  selector: 'app-task-wrapper',
  templateUrl: './task-wrapper.component.html',
  styleUrl: './task-wrapper.component.scss'
})
export class TaskWrapperComponent implements OnChanges, OnDestroy {

  @Input() tasks: ITask[] | null;
  appSetting$: Observable<IAppStore> = this.store.select(selectAppSetting);
  isAddNewTask$: Observable<boolean | undefined> = this.store.select(selectIsAddNewTask);
  sortTask: taskSortItem[];
  subscription$: Subscription;

  constructor(private store: Store<AppStore>, private sortOrderTaskServices: SortOrderTaskServices) { }

  ngOnChanges(): void {
    this.subscription$ = this.appSetting$.subscribe(
      (appSetting) => {
        this.sortTask = this.sortOrderTaskServices.sortOrder(appSetting, this.tasks || []);
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
