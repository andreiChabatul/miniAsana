import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setOrder } from 'src/store/actions/app.actions';
import { selectAppOrder } from 'src/store/selectors';
import { orderTask } from 'src/types/app';
import { AppStore } from 'src/types/store';

@Component({
  selector: 'app-header-order',
  templateUrl: './header-order.component.html',
  styleUrl: './header-order.component.scss'
})
export class HeaderOrderComponent {

  orderTask: orderTask[] = ['ASC', 'DESC'];
  order$ = this.store.select(selectAppOrder);

  constructor(private store: Store<AppStore>) { }

  setOrder(orderTask: orderTask) {
    this.store.dispatch(setOrder({ orderTask }))
  }

}
