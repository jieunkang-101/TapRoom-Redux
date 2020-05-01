import tapMenuReducer from './tap-menu-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTapMenu: tapMenuReducer
});

export default rootReducer;