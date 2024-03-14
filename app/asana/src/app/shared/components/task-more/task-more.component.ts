import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-more',
  templateUrl: './task-more.component.html',
  styleUrl: './task-more.component.scss'
})
export class TaskMoreComponent {

  @Input() id: string;

  constructor(private router: Router) { }

  moreInfo(): void {
    this.router.navigate(['task'], { queryParams: { id: this.id } });
  }

}
