import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './page/tasks-page/tasks-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDateComponent } from './components/task-date/task-date.component';
import { MaterialsModule } from '../materials/materials.module';
import { BackDateDirective } from './directive/backgroundDate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskcheckBoxComponent } from './components/taskcheck-box/taskcheck-box.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { BackStatusDirective } from './directive/backgroundStatus';
import { TaskPriorityComponent } from './components/task-priority/task-priority.component';
import { BackPriorityDirective } from './directive/backgroundPriority';
import { TaskControlComponent } from './components/task-control/task-control.component';
import { TaskAssigneeComponent } from './components/task-assignee/task-assignee.component';
import { TaskTitleComponent } from './components/task-title/task-title.component';
import { TaskWrapperComponent } from './components/task-wrapper/task-wrapper.component';
import { TaskPanelItemComponent } from './components/task-panel-item/task-panel-item.component';



@NgModule({
  declarations: [
    TasksPageComponent,
    TaskItemComponent,
    TaskDateComponent,
    BackDateDirective,
    TaskcheckBoxComponent,
    TaskStatusComponent,
    BackStatusDirective,
    TaskPriorityComponent,
    BackPriorityDirective,
    TaskControlComponent,
    TaskAssigneeComponent,
    TaskTitleComponent,
    TaskWrapperComponent,
    TaskPanelItemComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TasksPageComponent
  ]
})
export class TasksModule { }
