export interface ITask {
    id: string;
    title: string;
    desk?: string;
    deadline?: Date;
    priority?: EPriority;
    status: EStatus;
    performers?: IProfile;
}

export enum EPriority {
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
}