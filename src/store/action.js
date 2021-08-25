import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SEARCH_ID: 'load/searchId',
  LOAD_TICKETS: 'load/tickets',
};

export const loadSearchId = createAction(ActionType.LOAD_SEARCH_ID, (searchId) => ({
  payload: searchId,
}));

export const loadTickets = createAction(ActionType.LOAD_TICKETS, (tickets) => ({
  payload: tickets,
}));
