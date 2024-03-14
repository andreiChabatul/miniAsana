import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { setSeacrh } from 'src/store/actions/app.actions';
import { AppStore } from 'src/types/store';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss'
})
export class HeaderSearchComponent implements OnInit, OnDestroy {

  value = 'Clear me';
  searchForm: FormControl = new FormControl();
  subscription$: Subscription;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.searchForm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged())
      .subscribe(searchTask => this.store.dispatch(setSeacrh({ searchTask })))
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  clear(): void {
    this.searchForm.reset();
  }

}
