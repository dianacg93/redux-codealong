import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

//Redux thunk -> Async middleware for Redux

//Redux store:
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// the create store is taking two arguments: a reducer and an enhacer
// enhancer is used to specify it to enhance the store
// with third party capabilities such as middleware, time travel, persistence
// The only store enhancer that ships with redux is applyMiddleware()
//The reason we need thunk is because asynchronous code can't be passed to reducers or the dispatch method so we use thunk to perform async side effects before calling dispatch
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
