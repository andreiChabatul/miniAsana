import { createReducer, on } from "@ngrx/store";
import { IAppStore } from "src/types/store";
import * as appActions from '../actions/app.actions';

const initalState: IAppStore = {
    fieldSort: 'deadline',
    orderTask: 'ASC'
}

export const AppReducers = createReducer(initalState,
    on(appActions.setField, (state, { fieldSort }) => ({ ...state, fieldSort })),
    on(appActions.setOrder, (state, { orderTask }) => ({ ...state, orderTask })),
    on(appActions.setSeacrh, (state, { searchTask }) => ({ ...state, searchTask })),
)