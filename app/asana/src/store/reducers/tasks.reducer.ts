import { createReducer, on } from "@ngrx/store";
import { ITaskStore } from "src/types/store";
import * as tasksActions from '../actions/tasks.actions';

const initalState: ITaskStore = {
    tasks: []
}

export const TasksReducers = createReducer(initalState,
    on(tasksActions.addNewTask, (state, { isNnewTask }) => ({ ...state, isNnewTask })),
    on(tasksActions.recordTasks, (state, { tasks }) => ({ ...state, tasks })),
    on(tasksActions.recordTask, (state, { newTask }) => ({ ...state, tasks: [...state.tasks, newTask] })),
    on(tasksActions.updateTask, (state, { updateTask }) => ({
        ...state, tasks: state.tasks.map((item) =>
            (item.id === updateTask.id)
                ? updateTask
                : item
        )
    })),
    on(tasksActions.deleteTask, (state, { idDelete }) => ({
        ...state, tasks: state.tasks.filter((task) => task.id !== idDelete)
    })),
)