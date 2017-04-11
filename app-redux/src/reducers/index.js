import {combineReducers} from 'redux';

const getNextId = (collection) => {
  return collection.reduce( (acc, item) => Math.max(acc, item.id), 0) + 1;
};

function newColor(state = {} , action) {
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

export default rootReducer;