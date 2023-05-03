import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../../app.reducer';
import { toggleAllTodo } from '../../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})

export class TodoPageComponent {

  allCompleted: boolean = false;

  constructor(private store: Store<AppState>) {

    this.store.select('todoList').subscribe(todos => {
      this.allCompleted = todos.every(todo => todo.completado);
    });

  }

  toggleAll(): void {
    this.store.dispatch(toggleAllTodo());
  }

}
