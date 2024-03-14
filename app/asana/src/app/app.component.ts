import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOCAL_KEY } from 'src/const/localKey';
import { FAKE_DB } from 'src/fakeDB/services/fake-db.service';
import { setField, setOrder } from 'src/store/actions/app.actions';
import { fieldTaskSort, orderTask } from 'src/types/app';
import { AppStore } from 'src/types/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'asana';

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    FAKE_DB.initDB();
    this.initSettings();
  }

  private initSettings(): void {
    const fieldSort = localStorage.getItem(LOCAL_KEY.field_chabatul);
    const orderTask = localStorage.getItem(LOCAL_KEY.order_chabatul);
    if (fieldSort) this.store.dispatch(setField({ fieldSort: fieldSort as fieldTaskSort }));
    if (orderTask) this.store.dispatch(setOrder({ orderTask: orderTask as orderTask }));
  }

}
