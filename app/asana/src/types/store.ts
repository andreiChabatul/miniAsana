import { fieldTaskSort, orderTask } from "./app";
import { ITask } from "./task";


export interface AppStore {
    taskStore: ITaskStore;
    appStore: IAppStore;

}

export interface ITaskStore {
    tasks: ITask[];
    isNnewTask?: boolean;
}

export interface IAppStore {
    fieldSort: fieldTaskSort;
    orderTask: orderTask;
    searchTask?: string;
}