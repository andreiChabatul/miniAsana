import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map, mergeMap } from 'rxjs';
import { selectAppFieidSort, selectTasks } from 'src/store/selectors';
import { fieldTaskSort } from 'src/types/app';
import { AppStore } from 'src/types/store';
import { ITask } from 'src/types/task';
import { sortPriority } from './data/priority.sort';
import { statusSort } from './data/status.sort';
import { dayType, deadlineSort } from './data/deadline.sort';

type taskSortItem = {
  title: string,
  tasks: ITask[],
  sort: number;
}

@Component({
  selector: 'app-task-wrapper',
  templateUrl: './task-wrapper.component.html',
  styleUrl: './task-wrapper.component.scss'
})
export class TaskWrapperComponent implements OnInit, OnDestroy {

  fieldSort$: Observable<fieldTaskSort> = this.store.select(selectAppFieidSort);;
  tasks$: Observable<ITask[]> = this.store.select(selectTasks);
  sortTask: taskSortItem[];
  subscription$: Subscription;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {

    this.subscription$ = this.tasks$.pipe(
      mergeMap((tasks) => this.fieldSort$.pipe(
        map((fieldSort) => this.sortTaskFunc(fieldSort, tasks))
      ))
    ).subscribe((value) => this.sortTask = value.sort((a, b) => b.sort - a.sort))

  }

  sortTaskFunc(fieldSort: fieldTaskSort, tasks: ITask[]): taskSortItem[] {
    if (fieldSort === 'priority' || fieldSort === 'status') return this.sortPriorityStatus(fieldSort, tasks);
    if (fieldSort === 'assignee') return this.sortAssignee(tasks);
    if (fieldSort === 'deadline') return this.sortDeadline(tasks);
    return [];
  }

  sortPriorityStatus(fieldSort: 'priority' | 'status', tasks: ITask[]): taskSortItem[] {
    return tasks.reduce((acc, task) => {
      const fieldValue = `${fieldSort.toUpperCase()}: ${task[fieldSort]}`;
      this.fillArr(acc, fieldValue, task, fieldSort);
      return acc
    }, [] as taskSortItem[])
  }

  sortAssignee(tasks: ITask[]): taskSortItem[] {
    return tasks.reduce((acc, task) => {
      const fieldValue = `Assignee amount: ${task.assignee?.length || 'No assignee'}`;
      this.fillArr(acc, fieldValue, task, 'assignee');
      return acc;
    }, [] as taskSortItem[])
  }

  sortDeadline(tasks: ITask[]): taskSortItem[] {

    const resetHours = (date: Date) => date.setHours(0, 0, 0, 0);

    const calcDate = (date?: Date): dayType => {
      if (date) {
        const today = new Date();
        const day = 24 * 60 * 60 * 1000;
        const tomorrow = new Date(today.getTime() + day);
        const aferDaytomorrow = new Date(today.getTime() + (day * 2));
        const week = new Date(today.getTime() + (day * 7));

        if (resetHours(date) === resetHours(today)) return 'today';
        if (resetHours(date) === resetHours(tomorrow)) return 'tomorrow';
        if (resetHours(date) === resetHours(aferDaytomorrow)) return 'day after tomorrow';
        if (resetHours(date) > resetHours(aferDaytomorrow) && resetHours(date) < resetHours(week)) return 'in week';
        if (resetHours(date) > resetHours(week)) return 'later';
      }

      return 'no deadline';
    }

    return tasks.reduce((acc, task) => {
      const dayType = calcDate(task.deadline)
      const fieldValue = `Deadline: ${dayType}`;
      this.fillArr(acc, fieldValue, task, 'deadline', dayType);
      return acc
    }, [] as taskSortItem[])
  }

  fillArr(acc: taskSortItem[], fieldValue: string, task: ITask, fieldSort: fieldTaskSort, dayType?: dayType): void {
    const sort = (): number => {
      if (fieldSort === 'assignee') return task.assignee?.length || 0;
      if (fieldSort === 'priority') return sortPriority[task.priority];
      if (fieldSort === 'status') return statusSort[task.status];
      if (fieldSort === 'deadline') return deadlineSort[dayType || 'no deadline'];
      return 0;
    }

    const tempField = acc.find((item) => item.title === fieldValue);
    if (tempField) {
      tempField.tasks.push(task)
    } else {
      acc.push({
        title: fieldValue,
        tasks: [task],
        sort: sort()
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
