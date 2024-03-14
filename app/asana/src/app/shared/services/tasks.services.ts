import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FAKE_DB } from 'src/fakeDB/services/fake-db.service';
import { deleteTask, recordTask, recordTasks, updateTask } from 'src/store/actions/tasks.actions';
import { AppStore } from 'src/types/store';
import { EPriority, EStatus, ITask } from 'src/types/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksServices {

  constructor(private store: Store<AppStore>) { }

  async getAllTasks(): Promise<void> {
    try {
      const tasks = await FAKE_DB.getAllTask();
      this.recordTasks(tasks);
    } catch (error) {
      console.log(error)
    }
  }

  async addTask(data: Partial<ITask>) {

    const dataTask: ITask = {
      id: uuidv4(),
      priority: EPriority.none,
      status: EStatus.new,
      title: '',
      ...data
    };
    const newTask = await FAKE_DB.addTask(dataTask);
    this.store.dispatch(recordTask({ newTask }));
  }

  async getTask(id: string): Promise<ITask | undefined> {

    try {
      return await FAKE_DB.getTask(id)
    } catch (error) {
      console.log(error);
      return undefined;
    }

  }

  async updateTask(id: string, data: Partial<ITask>) {
    try {
      const task = await FAKE_DB.updateTask(id, data);
      this.store.dispatch(updateTask({ updateTask: task }));
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTask(id: string) {
    try {
      const idDelete = await FAKE_DB.deleteTask(id);
      this.store.dispatch(deleteTask({ idDelete }));
    } catch (error) {
      console.log(error)
    }
  }


  private recordTasks(tasks: ITask[]) {
    this.store.dispatch(recordTasks({ tasks }));
  }


}
