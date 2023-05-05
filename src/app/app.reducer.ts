import { ActionReducerMap } from "@ngrx/store";

import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";

import { Todo } from "./todos/models/todo.model";
import { ValidFilters } from "./filter/models/filter.model";

export interface AppState {
    todoList: Todo[];
    currentFilter: ValidFilters;
}

export const appReducer: ActionReducerMap<AppState> = {
    todoList: todoReducer,
    currentFilter: filterReducer
}