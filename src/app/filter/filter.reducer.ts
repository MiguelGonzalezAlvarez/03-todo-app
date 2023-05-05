import { createReducer, on } from '@ngrx/store';

import { updateFilter } from './filter.actions';

import { ValidFilters } from './models/filter.model';

export const initialState: ValidFilters = 'All';

export const filterReducer = createReducer(
    initialState as ValidFilters,
    on(updateFilter, (_, { currentFilter }) => currentFilter)
);