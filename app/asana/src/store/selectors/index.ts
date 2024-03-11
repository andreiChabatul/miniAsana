import { AppStore } from "src/types/store";

export const selectTasks = (state: AppStore) => state.taskStore.tasks;
export const selectAppFieidSort = (state: AppStore) => state.appStore.fieldSort;