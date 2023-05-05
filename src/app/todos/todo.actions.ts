import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo Component] Create todo', props<{ todoText: string }>());
export const updateTodo = createAction('[Todo Component] Update todo', props<{ todoId: number, todoText: string }>());
export const deleteTodo = createAction('[Todo Component] Delete todo', props<{ todoId: number }>());
export const toggleTodo = createAction('[Todo Component] Toggle todo', props<{ todoId: number }>());
export const toggleAllTodo = createAction('[Todo Component] Toggle all todo');
export const clearCompletedTodo = createAction('[Todo Component] Clear completed todo');
export const resetTodo = createAction('[Todo Component] Reset todo');