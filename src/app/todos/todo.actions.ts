import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea Todo',props<{texto: string}>()
);
export const toggle = createAction(
    '[TODO] Toggle Todo',props<{id: number}>()
);
export const edit = createAction(
    '[TODO] Edit Todo',props<{id:number,texto: string}>()
);
export const deleteTodo = createAction(
    '[TODO] Delete Todo',props<{id: number}>()
);
export const toggleAll = createAction(
    '[TODO] Toggle all Todos',props<{completado: boolean}>()
);