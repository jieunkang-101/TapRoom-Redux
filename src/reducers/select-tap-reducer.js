import * as c from './../actions/ActionTypes';

let initialState = {
  selectedTap: null
};

export default (state = initialState, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_TAP:
      return Object.assign({}, state, { selectedTap: id });
      // return state[id];
    default:
      return state;
  }
};