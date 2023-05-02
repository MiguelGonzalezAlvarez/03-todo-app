import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-components/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-components/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-components/todo-item/todo-item.component';
import { TodoListComponent } from './todo-components/todo-list/todo-list.component';
import { TodoPageComponent } from './todo-components/todo-page/todo-page.component';


@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
