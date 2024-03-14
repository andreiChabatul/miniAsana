import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as appActions from '../actions/app.actions';
import { tap } from 'rxjs';
import { LOCAL_KEY } from "src/const/localKey";

@Injectable()
export class SaveSettingsEffects {
    close$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(...[appActions.setField, appActions.setOrder]),
            tap((action) => {
                if (action.type === '[Set Field] Set Field') localStorage.setItem(LOCAL_KEY.field_chabatul, action.fieldSort);
                if (action.type === '[Set Order] Set Order') localStorage.setItem(LOCAL_KEY.order_chabatul, action.orderTask);
            }
            )),
        { dispatch: false }
    );

    constructor(private actionUnion$: Actions) { }
}
