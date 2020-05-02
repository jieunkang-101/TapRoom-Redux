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

export const sellPint = (id, pints) => ({
  type: c.SELL_PINT,
  id,
  pints
});

export const restockTap = (id) => ({
  type: c.RESTOCK_TAP,
  id
});

export const selectTap = (id) => ({
  type: c.SELECT_TAP,
  id
});

export const showTapMenu = () => ({
  type: c.SHOW_TAP_MENU
});

export const showTapDetail = () => ({
  type: c.SHOW_TAP_DETAIL
});

export const showNewTapForm = () => ({
  type: c.SHOW_NEW_FORM
});

export const showEditTapForm = () => ({
  type: c.SHOW_EDIT_FORM
});