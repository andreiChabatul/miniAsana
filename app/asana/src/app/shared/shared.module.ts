import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAssigneeComponent } from './components/task-assignee/task-assignee.component';
import { TaskControlComponent } from './components/task-control/task-control.component';
import { TaskDateComponent } from './components/task-date/task-date.component';
import { TaskcheckBoxComponent } from './components/taskcheck-box/taskcheck-box.component';
import { TasksServices } from './services/tasks.services';
import { TaskTitleComponent } from './components/task-title/task-title.component';
import { TaskPriorityComponent } from './components/task-priority/task-priority.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { BackPriorityDirective } from './directive/backgroundPriority';
import { BackStatusDirective } from './directive/backgroundStatus';
import { BackDateDirective } from './directive/backgroundDate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { TaskMoreComponent } from './components/task-more/task-more.component';
import { TaskDescriptionComponent } from './components/task-description/task-description.component';

@NgModule({
  declarations: [
    TaskAssigneeComponent,
    TaskControlComponent,
    TaskDateComponent,
    TaskcheckBoxComponent,
    TaskTitleComponent,
    TaskPriorityComponent,
    TaskStatusComponent,
    BackDateDirective,
    BackStatusDirective,
    BackPriorityDirective,
    TaskDeleteComponent,
    TaskMoreComponent,
    TaskDescriptionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule
  ],
  providers: [TasksServices],
  exports: [
    TaskAssigneeComponent,
    TaskControlComponent,
    TaskDateComponent,
    TaskcheckBoxComponent,
    TaskTitleComponent,
    TaskPriorityComponent,
    TaskStatusComponent,
    TaskDeleteComponent,
    TaskDescriptionComponent
  ]
})
export class SharedModule { }
