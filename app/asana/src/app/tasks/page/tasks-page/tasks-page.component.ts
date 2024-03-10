import { Component } from '@angular/core';
import { EStatus, ITask } from 'src/types/task';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {

  mocTask: ITask[] = [
    {
      id: 'fsdf',
      title: 'Сделать мотоцикл Лдиксер Провал',
      status: EStatus.loss,
      deadline: new Date(2024, 2, 11, 0, 0, 0, 0)
    },
    {
      id: 'fsdf',
      title: 'Сделать мотоцикл Лдиксер Провал',
      status: EStatus.done,
      deadline: new Date(2024, 2, 12, 0, 0, 0, 0)
    },
    {
      id: '12',
      title: 'Сделать мотоцикл Лдиксер',
      status: EStatus.new,
    },

    {
      id: '12',
      title: 'Сделать мотоцикл Лдиксер',
      status: EStatus.new,
      deadline: new Date()
    },
    {
      id: '132f2',
      title: 'Сделать мотоцикл Лдffwefиксер',
      status: EStatus.new,
      deadline: new Date(2011, 0, 1, 0, 0, 0, 0),

    }]

}
