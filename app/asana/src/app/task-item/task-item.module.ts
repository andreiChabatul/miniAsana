import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageItemTaskComponent } from './page/page-item-task/page-item-task.component';
import { TaskItemComponent } from './compnents/task-item.component';



@NgModule({
  declarations: [
    PageItemTaskComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TaskItemModule { }
