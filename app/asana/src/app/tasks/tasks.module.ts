import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './page/tasks-page/tasks-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDateComponent } from './components/task-date/task-date.component';



@NgModule({
  declarations: [
    TasksPageComponent,
    TaskItemComponent,
    TaskDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksPageComponent
  ]
})
export class TasksModule { }
