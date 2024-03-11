import { fieldTaskSort } from "./app";
import { ITask } from "./task";


export interface AppStore {
    taskStore: ITaskStore;
    appStore: IAppStore;

}

export interface ITaskStore {
    tasks: ITask[]
}

export interface IAppStore {
    fieldSort: fieldTaskSort;
}