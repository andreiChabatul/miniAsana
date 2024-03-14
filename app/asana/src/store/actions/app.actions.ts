import { createAction, props } from '@ngrx/store';
import { fieldTaskSort, orderTask } from 'src/types/app';

export const setField = createAction('[Set Field] Set Field', props<{ fieldSort: fieldTaskSort }>());
export const setOrder = createAction('[Set Order] Set Order', props<{ orderTask: orderTask }>());
export const setSeacrh = createAction('[Set Seacrh] Set Seacrh', props<{ searchTask: string }>());