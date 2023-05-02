import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo Component] Create todo', props<{ todoText: string }>());
export const resetTodo = createAction('[Todo Component] Reset todo');