import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import { AppState } from '../../../app.reducer';
import { toggleTodo } from '../../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {

  @Input() todo!: Todo;

  @ViewChild('editingInput') editingInput!: ElementRef;

  checkCompleted: FormControl;
  textInput: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {
    this.checkCompleted = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.checkCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(toggleTodo({ todoId: this.todo.id }));
    });

  }

  startEditing(): void {
    this.editing = true;

    setTimeout(() => {
      this.editingInput.nativeElement.select();
    }, 1);

  }

  finishEditing(): void {
    this.editing = false;

    if (this.textInput.invalid || this.textInput.value === this.todo.texto) {
      return;
    }

    this.todo.texto = this.textInput.value;
  }

}
