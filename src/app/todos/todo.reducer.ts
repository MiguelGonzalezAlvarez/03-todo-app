import { createReducer, on } from '@ngrx/store';

import { Todo } from './models/todo.model';

import { createTodo, updateTodo, deleteTodo, resetTodo, toggleTodo, toggleAllTodo } from './todo.actions';


export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { todoText }) => [...state, new Todo(todoText)]),
    on(updateTodo, (state, { todoId, todoText }) => state.map(todo => todo.id === todoId ? { ...todo, texto: todoText } : todo)),
    on(deleteTodo, (state, { todoId }) => state.filter(todo => todo.id !== todoId)),
    on(toggleTodo, (state, { todoId }) => state.map(todo => todo.id === todoId ? { ...todo, completado: !todo.completado } : todo)),
    on(toggleAllTodo, (state) => state.map(todo => ({ ...todo, completado: !todo.completado }))),
    on(resetTodo, () => initialState)
);