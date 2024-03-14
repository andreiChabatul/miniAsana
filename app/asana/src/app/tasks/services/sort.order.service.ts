import { Injectable } from '@angular/core';
import { resetHours } from 'src/const/resetHour';
import { fieldTaskSort, orderTask } from 'src/types/app';
import { ITask, taskSortItem } from 'src/types/task';
import { dayType, deadlineSort } from '../components/task-wrapper/data/deadline.sort';
import { aferDaytomorrow, today, tomorrow, week } from 'src/app/shared/const/date';
import { sortPriority } from '../components/task-wrapper/data/priority.sort';
import { statusSort } from '../components/task-wrapper/data/status.sort';
import { IAppStore } from 'src/types/store';

@Injectable({
    providedIn: 'root'
})
export class SortOrderTaskServices {

    sortOrder(appSetting: IAppStore, tasks: ITask[] | null): taskSortItem[] {
        const tasksSort = this.sortTasks(appSetting.fieldSort, tasks || []);
        return this.orderTask(tasksSort, appSetting.orderTask);
    }

    private sortTasks(fieldSort: fieldTaskSort, tasks: ITask[]): taskSortItem[] {
        return tasks.reduce((acc, task) => {
            const dayType = fieldSort === 'deadline' ? this.calcDate(task.deadline) : undefined;
            const fieldValue = this.getFieldValue(fieldSort, task, dayType);
            this.fillArr(acc, fieldValue, task, fieldSort, dayType);
            return acc;
        }, [] as taskSortItem[])
    }

    private orderTask(tasks: taskSortItem[], order: orderTask): taskSortItem[] {
        if (order === 'ASC') return tasks.sort((a, b) => a.sort - b.sort);
        if (order === 'DESC') return tasks.sort((a, b) => b.sort - a.sort);
        return tasks;
    }

    private fillArr(acc: taskSortItem[],
        fieldValue: string,
        task: ITask,
        fieldSort: fieldTaskSort,
        dayType?: dayType
    ): void {
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

    private getFieldValue(fieldSort: fieldTaskSort, task: ITask, dayType?: dayType): string {
        if (fieldSort === 'priority' || fieldSort === 'status') return `${fieldSort.toUpperCase()}: ${task[fieldSort]}`
        if (fieldSort === 'assignee') return `Assignee amount: ${task.assignee?.length || 'No assignee'}`;
        if (fieldSort === 'deadline') return `Deadline: ${dayType}`;
        return ''
    }

    private calcDate(date?: Date): dayType {
        if (date) {
            if (resetHours(date) === resetHours(today)) return 'today';
            if (resetHours(date) === resetHours(tomorrow)) return 'tomorrow';
            if (resetHours(date) === resetHours(aferDaytomorrow)) return 'day after tomorrow';
            if (resetHours(date) > resetHours(aferDaytomorrow) && resetHours(date) <= resetHours(week)) return 'in week';
            if (resetHours(date) > resetHours(week)) return 'later';
        }
        return 'no deadline';
    }

}