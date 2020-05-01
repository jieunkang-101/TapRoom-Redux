import tapMenuReducer from './tap-menu-reducer';
import selectTapReducer from './select-tap-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTapMenu: tapMenuReducer,
  selectedTap: selectTapReducer
});

export default rootReducer;