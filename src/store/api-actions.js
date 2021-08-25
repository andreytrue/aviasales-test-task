import { APIRoute } from '../utils/const';
import { loadSearchId, loadTickets } from './action';

export const fetchSearchId = () => (dispatch, _getState, api) => (
  api.get(APIRoute.SEARCH)
    .then(({data}) => dispatch(loadSearchId(data)))
);

export const fetchTickets = (searchId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.TICKETS}?searchId=${searchId}`)
    .then(({data}) => dispatch(loadTickets(data)))
);
