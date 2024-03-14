import { LOCAL_KEY } from "src/const/localKey";
import { mocTask } from "../data/tasks";
import { ITask } from "src/types/task";

const delayServer = 250;

export class FakeDBService {

  initDB(): void {
    const DB = localStorage.getItem(LOCAL_KEY.db_chabatul);
    if (!DB) localStorage.setItem(LOCAL_KEY.db_chabatul, JSON.stringify(mocTask));
  }

  async getAllTask(): Promise<ITask[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getDBLocal()), delayServer);
    })
  }

  async addTask(task: ITask): Promise<ITask> {
    return new Promise((resolve) => {
      const BD = this.getDBLocal();
      BD.push(task);
      this.setDBLocal(BD);
      setTimeout(() => resolve(task), delayServer);
    })
  }

  async getTask(id: string): Promise<ITask> {
    return new Promise((resolve, reject) => {
      const BD = this.getDBLocal();
      const task = BD.filter((task) => task.id === id);
      task.length ? resolve(task[0]) : reject('No found task')
    })

  }

  async updateTask(id: string, data: Partial<ITask>): Promise<ITask> {
    return new Promise((resolve, reject) => {
      const BD = this.getDBLocal();
      let newTask: ITask = {} as ITask;
      const indexTask = BD.findIndex((task) => task.id === id);
      const newBD = BD.map((task) => {
        if (task.id === id) {
          newTask = { ...task, ...data }
          return newTask;
        }
        return task;
      })
      this.setDBLocal(newBD);

      setTimeout(() => {
        indexTask === -1
          ? reject('No found task')
          : resolve(newTask)
      }, delayServer);
    })
  }

  async deleteTask(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const DB = this.getDBLocal();
      const indexTask = DB.findIndex((task) => task.id === id);
      DB.splice(indexTask, 1)
      if (indexTask !== -1) this.setDBLocal(DB);
      setTimeout(() => {
        indexTask === -1
          ? reject('No found task')
          : resolve(id)
      }, delayServer);
    })
  }


  private getDBLocal(): ITask[] {
    return JSON.parse(localStorage.getItem(LOCAL_KEY.db_chabatul) || '');
  }

  private setDBLocal(DB: ITask[]): void {
    localStorage.setItem(LOCAL_KEY.db_chabatul, JSON.stringify(DB));
  }



}

export const FAKE_DB = new FakeDBService();

