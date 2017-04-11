import React from 'react';
import ReactDOM from 'react-dom';
import ColorApp from './ColorApp';
import './index.css';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const stateFromLocal = localStorage.getItem('state');

let initialState = ( stateFromLocal
&& stateFromLocal.colors
&& stateFromLocal.newColor
&& stateFromLocal.objStyle ) ? stateFromLocal : {
  objStyle : {backgroundColor: 'blue'},
  colors : [
    {id:1, name:'violet', color:'#f5aafb'},
    {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
    {id:3, name:'pale green', color:'#aafbde'},
    {id:4, name:'vermillon', color:'#fe532e'},
    {id:5, name:'sky blue', color:'#82c4fa'},
    {id:6, name:'salmon', color:'#fb8b8b'},
  ],
  newColor: {
    name: '',
    color: ''
  }
};




const getNextId = (collection) => {
  return collection.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
};

function newColor(state = {} , action) {
  console.log('action : ', action)
  switch (action.type) {
  case 'CHANGE_NEW_COLOR':
    return { ...state, [action.key]: action.value};
  default:
    return state;
  }
}

function colors(state = [] , action) {
  switch (action.type) {
  case 'ADD_COLOR':
    return [...state, {...action.color, id: getNextId(state)}];
  default:
    return state;
  }
}

function objStyle(state = {} , action) {
  switch (action.type) {
  case 'CHANGE_COLOR':
    return { backgroundColor: action.col};
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  newColor,
  objStyle,
  colors
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.state = JSON.stringify(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <ColorApp />
  </Provider>,
  document.getElementById('root')
);
