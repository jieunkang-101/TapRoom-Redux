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
  default:
    return state;
  }
};