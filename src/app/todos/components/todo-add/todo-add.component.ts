import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { createTodo, resetTodo } from '../../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('Hola', Validators.required);
  }

  addTodo(): void {
    if (this.textInput.invalid) { return; }

    this.store.dispatch(createTodo({ todoText: this.textInput.value }));
    this.textInput.reset();
  }

  resetTodo(): void {
    this.store.dispatch(resetTodo());
  }

}
