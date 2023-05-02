import { createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';

import { createTodo, resetTodo } from './todo.actions';


export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { todoText }) => [...state, new Todo(todoText)]),
    on(resetTodo, () => initialState)
);