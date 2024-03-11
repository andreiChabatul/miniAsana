import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/store';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    TasksModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
