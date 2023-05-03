import { createAction, props } from '@ngrx/store';

import { ValidFilters } from './models/filter.model';

export const updateFilter = createAction('[Filter Component] Update filter', props<{ filter: ValidFilters }>());
