import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';
 
export const initialState:Todo[] = [];
 
const _todoReducer = createReducer(initialState,
  on(actions.crear, (state,{texto}) => [...state, new Todo(texto)]),
);
 
export function todoReducer(state: Todo[] | undefined, action:Action) {
  return _todoReducer(state, action);
}