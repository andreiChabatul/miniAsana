import { Component } from '@angular/core';
import { EStatus, ITask } from 'src/types/task';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent {

  mocTask: ITask = {
    id: '12',
    title: 'Сделать мотоцикл Лдиксер',
    status: EStatus.new,
    deadline: new Date()
  }

}
