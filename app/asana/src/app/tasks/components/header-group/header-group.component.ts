import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setField } from 'src/store/actions/app.actions';
import { selectAppFieldSort } from 'src/store/selectors';
import { fieldTaskSort } from 'src/types/app';
import { AppStore } from 'src/types/store';

@Component({
  selector: 'app-header-group',
  templateUrl: './header-group.component.html',
  styleUrl: './header-group.component.scss'
})
export class HeaderGroupComponent {

  fieldTaskSort: fieldTaskSort[] = ['deadline', 'assignee', 'priority', 'status'];
  field$ = this.store.select(selectAppFieldSort);

  constructor(private store: Store<AppStore>) { }

  setField(fieldSort: fieldTaskSort) {
    this.store.dispatch(setField({ fieldSort }))
  }

}
