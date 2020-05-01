import * as c from './ActionTypes';

export const addTap = (tap) => {
  const { img, name, brand, price, abv, pints, message, id }  = tap;
  return {
    type: c.ADD_TAP,
    img: img,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pints: pints,
    message: message,
    id: id
  }
}

export const deleteTap = (id) => ({
  type: c.DELETE_TAP,
  id
});

export const selectTap = (id) => ({
  type: c.SELECT_TAP,
  id
})