import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './page/tasks-page/tasks-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDateComponent } from './components/task-date/task-date.component';
import { MaterialsModule } from '../materials/materials.module';
import { BackDateDirective } from './directive/backgroundDate';
import { FormsModule } from '@angular/forms';
import { TaskcheckBoxComponent } from './components/taskcheck-box/taskcheck-box.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';



@NgModule({
  declarations: [
    TasksPageComponent,
    TaskItemComponent,
    TaskDateComponent,
    BackDateDirective,
    TaskcheckBoxComponent,
    TaskStatusComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule
  ],
  exports: [
    TasksPageComponent
  ]
})
export class TasksModule { }
