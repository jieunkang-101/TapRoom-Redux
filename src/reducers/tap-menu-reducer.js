import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { img, name, brand, price, abv, pints, message, id } = action;
  switch (action.type) {
    case c.ADD_TAP:
      return Object.assign({}, state, {
        [id]: {
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
    case c.DELETE_TAP:
      const newState = { ...state };
      delete newState[id];
      return newState;      
    // case c.SELL_PINT:
    //   let   


  default:
    return state;
  }
};