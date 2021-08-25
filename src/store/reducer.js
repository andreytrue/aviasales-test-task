import { createReducer } from '@reduxjs/toolkit';
import { loadSearchId, loadTickets } from './action';
import { adaptSearchId, adaptTickets } from '../utils/common';

const initialState = {
  searchId: '',
  tickets: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSearchId, (state, action) => {
      state.searchId = adaptSearchId(action.payload);
    })
    .addCase(loadTickets, (state, action) => {
      state.tickets = adaptTickets(action.payload);
    });
});

export {reducer};
