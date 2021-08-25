import React from 'react';
import '../../sass/style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchId } from '../../store/selectors';
import { fetchTickets } from '../../store/api-actions';

import MainScreen from '../main-screen/main-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function App() {
  const searchId = useSelector(getSearchId);
  const dispatch = useDispatch();

  if (searchId) {
    dispatch(fetchTickets(searchId))
  } else {
    return (
      <LoadingScreen />
    )
  }

  return (
    <MainScreen />
  );
}

export default App;
