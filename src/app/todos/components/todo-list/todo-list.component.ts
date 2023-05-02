import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todoList').subscribe(stateTodoList => this.todoList = stateTodoList);
  }

}