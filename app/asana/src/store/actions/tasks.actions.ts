import { createAction, props } from '@ngrx/store';
import { ITask } from 'src/types/task';

export const addNewTask = createAction('[Add New Task] Add New Task', props<{ isNnewTask: boolean }>());
export const recordTasks = createAction('[Record Tasks] Record Tasks', props<{ tasks: ITask[] }>());
export const recordTask = createAction('[Record Task] Record Task', props<{ newTask: ITask }>());
export const updateTask = createAction('[Update Task] Update Task', props<{ updateTask: ITask }>());
export const deleteTask = createAction('[Delete Task] Delete Task', props<{ idDelete: string }>());