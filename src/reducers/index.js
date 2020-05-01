import tapMenuReducer from './tap-menu-reducer';
import selectTapReducer from './select-tap-reducer';
import displayToggleReducer from './display-toggle-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTapMenu: tapMenuReducer,
  selectedTap: selectTapReducer,
  displayToggle: displayToggleReducer
});

export default rootReducer;