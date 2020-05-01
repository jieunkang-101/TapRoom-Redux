import * as c from './../actions/ActionTypes';

let initialState = {
  selectedTapId: null
};

export default (state = initialState, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_TAP:
      return Object.assign({}, state, { selectedTapId: id });
    default:
      return state;
  }
};