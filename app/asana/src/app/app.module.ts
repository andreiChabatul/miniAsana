import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.config';
import { TaskItemModule } from './task-item/task-item.module';
import { EFFECTS } from 'src/store/effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TasksModule,
    TaskItemModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EFFECTS),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
