import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import { AppState } from '../../../app.reducer';
import { ValidFilters } from 'src/app/filter/models/filter.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  currentFilter: ValidFilters = 'All';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todoList').subscribe(stateTodoList => this.todoList = stateTodoList);
    this.store.select('currentFilter').subscribe(stateCurrentFilter => this.currentFilter = stateCurrentFilter);
  }

}