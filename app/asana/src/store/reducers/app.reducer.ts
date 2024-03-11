import { createReducer } from "@ngrx/store";
import { IAppStore } from "src/types/store";


const initalState: IAppStore = {
    fieldSort: 'deadline'
}

export const AppReducers = createReducer(initalState,

)