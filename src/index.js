import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { createAPI } from './utils/api';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/app/App.jsx';
import { fetchSearchId } from './store/api-actions';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(),
});

store.dispatch(fetchSearchId());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
