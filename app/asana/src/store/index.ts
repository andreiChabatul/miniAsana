
import { ActionReducerMap } from '@ngrx/store';
import { TasksReducers } from './reducers/tasks.reducer';
import { AppStore } from 'src/types/store';
import { AppReducers } from './reducers/app.reducer';

export const appReducers: ActionReducerMap<AppStore, any> = {
    taskStore: TasksReducers,
    appStore: AppReducers

};
