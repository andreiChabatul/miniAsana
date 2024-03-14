import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { selectSeacrh } from 'src/store/selectors';
import { AppStore } from 'src/types/store';
import { ITask } from 'src/types/task';

@Pipe({
  name: 'seacrhTask',
})
export class SeacrhTaskPipe implements PipeTransform {

  constructor(private store: Store<AppStore>) { }
  seacrh$ = this.store.select(selectSeacrh);

  transform(value: Observable<ITask[]>): Observable<ITask[]> {

    return this.seacrh$.pipe(
      switchMap((seacrh) => value.pipe(
        map((tasks) => {

          if (seacrh) return tasks.filter((task) =>
            task.title.toLowerCase().includes(seacrh.toLowerCase())
          );

          return tasks;
        })
      ))
    )
  }

}
