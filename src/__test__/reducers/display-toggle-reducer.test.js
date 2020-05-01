import displayToggleReducer from '../../reducers/display-toggle-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayToggleReducer', () => {

  let initialState = {
    showTapMenu: true,
    showNewTapForm: false,
    showEditTapForm: false
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(displayToggleReducer(initialState, { type: null })).toEqual({
      showTapMenu: true,
      showNewTapForm: false,
      showEditTapForm: false
    });
  });

  test('Should successfully set true from showTapMenu to display Tap Menu', () => {
    expect(displayToggleReducer(initialState, { type: c.SHOW_TAP_MENU })).toEqual({
      showTapMenu: true,
      showNewTapForm: false,
      showEditTapForm: false
    });
  })

  test('Should successfully set false from showTapMenu to display Tap Detail', () => {
    expect(displayToggleReducer(initialState, { type: c.SHOW_TAP_DETAIL })).toEqual({
      showTapMenu: false,
      showNewTapForm: false,
      showEditTapForm: false
    });
  })

  test('Should successfully set state to display New Tap Form', () => {
    expect(displayToggleReducer(initialState, { type: c.SHOW_NEW_FORM })).toEqual({
      showTapMenu: false,
      showNewTapForm: true,
      showEditTapForm: false
    });
  })

  test('Should successfully set state to display Edit Tap Form', () => {
    expect(displayToggleReducer(initialState, { type: c.SHOW_EDIT_FORM })).toEqual({
      showTapMenu: false,
      showNewTapForm: false,
      showEditTapForm: true
    });
  })
});  