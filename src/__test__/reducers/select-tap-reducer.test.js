import selecteTapReducer from '../../reducers/select-tap-reducer';

describe('selecteTapReducer', () => {

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selecteTapReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully set current state of seleced tap by id ', () => {
    action = {
      type: 'SELECT_TAP',
      id: 1
    };
    expect(selecteTapReducer({}, action)).toEqual({
      selectedTapId: 1
    })
  });
});
