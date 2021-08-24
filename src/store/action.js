export const ActionType = {
  SEARCH_TICKETS: 'tickets/search',
  LOAD_TICKETS: 'tickets/load',
};

export const ActionCreator = {
  searchTickets: (searchId) => ({
    type: ActionType.SEARCH_TICKETS,
    payload: searchId,
  }),
  loadTickets: (tickets) => ({
    type: ActionType.LOAD_TICKETS,
    payload: tickets,
  }),
};
