import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import displayToggleReducer from '../../reducers/display-toggle-reducer';
import selecteTapReducer from '../../reducers/select-tap-reducer';
import tapMenuReducer from '../../reducers/tap-menu-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapMenu: {},
      selectedTap: { selectedTapId: null },
      displayToggle: {  showTapMenu: true, showNewTapForm: false, showEditTapForm: false }
    });
  });

  test('Check that initial state of tapMenuReducer matches root reducer', () => {
    expect(store.getState().masterTapMenu).toEqual(tapMenuReducer(undefined, { type: null }));
  });

  test('Check that initial state of selecteTapReducer matches root reducer', () => {
    expect(store.getState().selectedTap).toEqual(selecteTapReducer(undefined, { type: null }));
  });

  test('Check that initial state of displayToggleReducer matches root reducer', () => {
    expect(store.getState().displayToggle).toEqual(displayToggleReducer(undefined, { type: null }));
  });
});  