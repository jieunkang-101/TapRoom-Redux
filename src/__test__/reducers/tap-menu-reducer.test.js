import tapMenuReducer from '../../reducers/tap-menu-reducer';
import * as c from '../../actions/ActionTypes';

describe('tapMenuReducer', () => {

  let action;
  const tapData = {
    img: 'imageURL',
    name: 'Lager',
    brand: 'A',
    price: '10',
    abv: '10',
    pints: 5,
    message: 'Almost Empty',
    id: 1 }
  const currentState = {
    1: { 
      img: 'imageURL',
      name: 'Lager',
      brand: 'A',
      price: '10',
      abv: '10',
      pints: 5,
      message: 'Almost Empty',
      id: 1 
    },
    2: { 
      img: 'imageURL',
      name: 'IPA',
      brand: 'B',
      price: '11',
      abv: '11',
      pints: 124,
      message: 'Enough',
      id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapMenuReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new tap data to masterTapMenu', () => {
    const { img, name, brand, price, abv, pints, message, id } = tapData;
    action = {
      type: c.ADD_TAP,
      img: img,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pints: pints,
      message: message,
      id: id
    };
    expect(tapMenuReducer({}, action)).toEqual({
      [id] : {
        img: img,
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pints: pints,
        message: message,
        id: id
      }
    });
  });  

  test('Should successfully delete a tap', () => {
    action = {
      type: c.DELETE_TAP,
      id: 1
    };
    expect(tapMenuReducer(currentState, action)).toEqual({
      2: { img: 'imageURL',
        name: 'IPA',
        brand: 'B',
        price: '11',
        abv: '11',
        pints: 124,
        message: 'Enough',
        id: 2 }
    });
  });

  test('Should successfully decrease pints property of existing tap data in masterTapMenu', () => {
    const { pints } = currentState;
    action = {
      type: c.SELL_PINT,
      id: 1,
      pints: pints
    }
    expect(tapMenuReducer(currentState, action)).toEqual({
      1: { 
        img: 'imageURL',
        name: 'Lager',
        brand: 'A',
        price: '10',
        abv: '10',
        pints: 4,
        message: 'Almost Empty',
        id: 1 
      },
      2: { 
        img: 'imageURL',
        name: 'IPA',
        brand: 'B',
        price: '11',
        abv: '11',
        pints: 124,
        message: 'Enough',
        id: 2 
      }
    });
  });  

  test('Should successfully increase pints property of existing tap data in masterTapMenu', () => {
    const { pints, message } = currentState;
    action = {
      type: c.RESTOCK_TAP,
      id: 1,
      pints: pints,
      message: message
    }
    expect(tapMenuReducer(currentState, action)).toEqual({
      1: { 
        img: 'imageURL',
        name: 'Lager',
        brand: 'A',
        price: '10',
        abv: '10',
        pints: 128,
        message: 'Enough',
        id: 1 
      },
      2: { 
        img: 'imageURL',
        name: 'IPA',
        brand: 'B',
        price: '11',
        abv: '11',
        pints: 124,
        message: 'Enough',
        id: 2 
      }
    });
  });  
});  