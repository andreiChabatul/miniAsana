import { Component, Input } from '@angular/core';
import { EStatus } from 'src/types/task';

@Component({
  selector: 'app-taskcheck-box',
  templateUrl: './taskcheck-box.component.html',
  styleUrl: './taskcheck-box.component.scss'
})
export class TaskcheckBoxComponent {

  @Input() id: string;
  @Input() status: EStatus;


  changeStatus(): void {
    console.log(this.status)
  }

}
