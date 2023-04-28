import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoModule } from './todos/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
