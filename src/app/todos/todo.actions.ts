import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo Component] Create todo', props<{ todoText: string }>());
export const toggleTodo = createAction('[Todo Component] Toggle todo', props<{ todoId: number }>());
export const resetTodo = createAction('[Todo Component] Reset todo');