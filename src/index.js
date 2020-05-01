import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';  
import rootReducer from './reducers/index';
import { Provider } from 'react-redux'; 
import initailState from './initialState';

const store = createStore(
  rootReducer,
  initailState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// just for testing! Do not include this "production" code!
store.subscribe(() =>
  console.log(store.getState())
);  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
