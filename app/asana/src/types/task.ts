export interface ITask {
    id: string;
    title: string;
    desk?: string;
    deadline?: Date;
    priority: EPriority;
    status: EStatus;
    description?: string;
    assignee?: string[];
}

export enum EPriority {
    none = 'none',
    low = 'low',
    medium = 'medium',
    high = 'high',
    critical = 'critical'
}

export enum EStatus {
    new = 'new',
    progress = 'progress',
    loss = 'loss',
    close = 'close',
    done = 'done'
}

export interface IProfile {
    name: string;
    image?: string;
    id: string
}

export type taskSortItem = {
    title: string,
    tasks: ITask[],
    sort: number;
  }