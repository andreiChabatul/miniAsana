import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './page/tasks-page/tasks-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskWrapperComponent } from './components/task-wrapper/task-wrapper.component';
import { TaskPanelItemComponent } from './components/task-panel-item/task-panel-item.component';
import { HeaderTasksComponent } from './components/header-tasks/header-tasks.component';
import { HeaderGroupComponent } from './components/header-group/header-group.component';
import { HeaderOrderComponent } from './components/header-order/header-order.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { SeacrhTaskPipe } from './pipe/seacrh-task.pipe';
import { TasksHatComponent } from './components/tasks-hat/tasks-hat.component';
import { TaskNewComponent } from './components/task-new/task-new.component';
import { SharedModule } from '../shared/shared.module';
import { SortOrderTaskServices } from './services/sort.order.service';


@NgModule({
  declarations: [
    TasksPageComponent,
    TaskItemComponent,
    TaskWrapperComponent,
    TaskPanelItemComponent,
    HeaderTasksComponent,
    HeaderGroupComponent,
    HeaderOrderComponent,
    HeaderSearchComponent,
    SeacrhTaskPipe,
    TasksHatComponent,
    TaskNewComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    TasksPageComponent
  ],
  providers: [
    SortOrderTaskServices
  ]
})
export class TasksModule { }
