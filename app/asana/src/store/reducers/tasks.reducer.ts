import { createReducer } from "@ngrx/store";
import { USERS } from "src/fakeDB/users";
import { ITaskStore } from "src/types/store";
import { EPriority, EStatus, ITask } from "src/types/task";

const mocTask: ITask[] = [
    {
        id: 'fsdf',
        title: 'Сделать мотоцикл Лдиксер Провал',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 13, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: [USERS[2], USERS[2], USERS[2]]
    },
    {
        id: 'fsdf',
        title: 'Сделать мотоцикл Лдиксер Провал',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 15, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: [USERS[2], USERS[2]]
    },
    {
        id: 'fsdf',
        title: 'Сделать мотоцикл Лдиксер Провал',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 17, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: [USERS[2]]
    },
    {
        id: 'fsdf',
        title: 'Сделать мотоцикл Лдиксер Провал',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 21, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: [USERS[2]]
    },
    {
        id: 'fsdf',
        title: 'Сделать мотоцикл Лдиксер Провал',
        status: EStatus.done,
        deadline: new Date(2024, 2, 12, 0, 0, 0, 0),
        priority: EPriority.medium
    },
    {
        id: '12',
        title: 'Сделать мотоцикл Лдиксер',
        status: EStatus.new,
        priority: EPriority.low,
        assignee: [USERS[1], USERS[3], USERS[1], USERS[3]]
    },

    {
        id: '12',
        title: 'Сделать мотоцикл Лдиксер',
        status: EStatus.progress,
        deadline: new Date(),
        priority: EPriority.high,
        assignee: [USERS[1]]
    },
    {
        id: '12',
        title: 'Сделать мотоцикл Лдиксер',
        status: EStatus.progress,
        deadline: new Date(),
        priority: EPriority.high
    },
    {
        id: '132f2',
        title: 'Сделать мотоцикл Лдffwefиксер',
        status: EStatus.close,
        deadline: new Date(2011, 0, 1, 0, 0, 0, 0),
        priority: EPriority.critical

    }]


const initalState: ITaskStore = {
    tasks: mocTask
}

export const TasksReducers = createReducer(initalState,

)