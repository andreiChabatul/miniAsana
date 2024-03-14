import { Component, Input } from '@angular/core';
import { EStatus } from 'src/types/task';
import { TasksServices } from '../../services/tasks.services';


@Component({
  selector: 'app-taskcheck-box',
  templateUrl: './taskcheck-box.component.html',
  styleUrl: './taskcheck-box.component.scss'
})
export class TaskcheckBoxComponent {

  @Input() id: string;
  @Input() status: EStatus;

  constructor(private tasksServices: TasksServices) { }

  changeStatus(): void {
    let status: EStatus = EStatus.loss;
    if (this.status === EStatus.done) status = EStatus.progress;
    if (this.status === EStatus.new) status = EStatus.progress;
    if (this.status === EStatus.progress) status = EStatus.done;
    this.tasksServices.updateTask(this.id, { status })
  }

  viewStatus(): string {
    if (this.status === EStatus.new) return 'add';
    if (this.status === EStatus.done) return 'done';
    if (this.status === EStatus.loss) return 'close';
    if (this.status === EStatus.close) return 'remove';
    if (this.status === EStatus.progress) return 'more_horiz';
    return ''
  }

}
