import tapMenuReducer from '../../reducers/tap-menu-reducer';

describe('tapMenuReducer', () => {

  let action;
  const tapData = {
    img: 'imageURL',
    name:'Lager',
    brand:'A',
    price:'10',
    abv:'10',
    pints:'124',
    message:'Enough',
    id: 1 }
  const currentState = {
    1: { 
      img: 'imageURL',
      name:'Lager',
      brand:'A',
      price:'10',
      abv:'10',
      pints:'124',
      message:'Enough',
      id: 1 
    },
    2: { 
      img: 'imageURL',
      name:'IPA',
      brand:'B',
      price:'11',
      abv:'11',
      pints:'124',
      message:'Enough',
      id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapMenuReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new tap data to masterTapMenu', () => {
    const { img, name, brand, price, abv, pints, message, id } = tapData;
    action = {
      type: 'ADD_TAP',
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
      type: 'DELETE_TAP',
      id: 1
    };
    expect(tapMenuReducer(currentState, action)).toEqual({
      2: { img: 'imageURL',
        name:'IPA',
        brand:'B',
        price:'11',
        abv:'11',
        pints:'124',
        message:'Enough',
        id: 2 }
    });
  });

  

});  