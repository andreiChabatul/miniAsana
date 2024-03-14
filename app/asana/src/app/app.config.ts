import { Routes } from "@angular/router";
import { TasksPageComponent } from "./tasks/page/tasks-page/tasks-page.component";
import { PageItemTaskComponent } from "./task-item/page/page-item-task/page-item-task.component";


export const appRoutes: Routes =[
    { path: "", component: TasksPageComponent},
    { path: 'task', component: PageItemTaskComponent},
];
