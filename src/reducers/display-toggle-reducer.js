import * as c from './../actions/ActionTypes';

let initailState = {
  showTapMenu: true,
  showNewTapForm: false,
  showEditTapForm: false,
  // selectedTapId: null
}

export default (state = initailState, action) => {
  // const { showTapMenu, showNewTapForm, showEditTapForm } = action;
  switch (action.type) {
    case c.SHOW_TAP_MENU:
      return Object.assign({}, state, { showTapMenu: true, showNewTapForm: false, showEditTapForm: false });
    case c.SHOW_TAP_DETAIL:
      return Object.assign({}, state, { showTapMenu: false, showNewTapForm: false, showEditTapForm: false });  
    case c.SHOW_NEW_FORM:  
      return Object.assign({}, state, { showTapMenu: false, showNewTapForm: true, showEditTapForm: false });  
    case c.SHOW_EDIT_FORM:
      return Object.assign({}, state, { showTapMenu: false, showNewTapForm: false, showEditTapForm: true });    
    default:
      return state;
  }
}