import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';
 
export const initialState:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Destruir a Freezer'),
    new Todo('Salvar Namekusein'),
];

const _todoReducer = createReducer(initialState,
  on(actions.crear,   (state,{texto}) => [...state, new Todo(texto)]),
  on(actions.toggle,  (state,{id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      return todo;
    });
  }),
  on(actions.edit, (state,{id,texto}) => {
    return state.map(todo => {
      if(todo.id === id){
        return{
          ...todo,texto
        }
      }else{
        return todo;
      }
    });
  }),
);
 
export function todoReducer(state: Todo[] | undefined, action:Action) {
  return _todoReducer(state, action);
}