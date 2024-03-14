import { createSelector } from "@ngrx/store";
import { AppStore } from "src/types/store";

export const selectTasks = (state: AppStore) => state.taskStore.tasks;
export const selectIsAddNewTask = (state: AppStore) => state.taskStore.isNnewTask;
export const selectAppSetting = (state: AppStore) => state.appStore;
export const selectAppFieldSort = (state: AppStore) => state.appStore.fieldSort;
export const selectAppOrder = (state: AppStore) => state.appStore.orderTask;
export const selectSeacrh = (state: AppStore) => state.appStore.searchTask;
export const selectTaskId = (props: { id: string }) =>
    createSelector(selectTasks,
        (state) => state.filter((task) => task.id === props.id)[0]
    );