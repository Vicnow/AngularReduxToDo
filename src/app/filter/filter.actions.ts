import { createAction, props } from '@ngrx/store';

export type filters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
    '[FILTER] Set filter',props<{filtro: string}>()
);