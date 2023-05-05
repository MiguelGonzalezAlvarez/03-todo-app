import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { updateFilter } from 'src/app/filter/filter.actions';
import { ValidFilters } from 'src/app/filter/models/filter.model';
import { clearCompletedTodo } from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: ValidFilters = 'All';
  posibleFilters: ValidFilters[] = ['All', 'Completed', 'Pending'];
  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('currentFilter').subscribe(stateCurrentFilter => this.currentFilter = stateCurrentFilter);
    this.store.select('todoList').subscribe(stateTodoList => this.pendingTodos = stateTodoList.filter(todo => !todo.completado).length);
  }

  setCurrentFilter(selectedFilter: ValidFilters) {
    this.store.dispatch(updateFilter({ currentFilter: selectedFilter }));
  }

  clearCompletedTodo() {
    this.store.dispatch(clearCompletedTodo());
  }


}
