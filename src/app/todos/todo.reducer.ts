import { createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';

import { createTodo, resetTodo, toggleTodo } from './todo.actions';


export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { todoText }) => [...state, new Todo(todoText)]),
    on(toggleTodo, (state, { todoId }) => state.map(todo => todo.id === todoId ? { ...todo, completado: !todo.completado } : todo)),
    on(resetTodo, () => initialState)
);