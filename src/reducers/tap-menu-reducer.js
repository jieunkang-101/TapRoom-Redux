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
    case c.SELL_PINT:
      const newState2 = { ...state };
      const leftPints = newState2[id].pints > 0 ? newState2[id].pints -= 1 : 0;
      const soldPintState = { ...newState2, [id]: { ...newState2[id], pints: leftPints } };
      const newMessage = leftPints < 10 ? "Almost Empty": "Enough";
      const updateState = { ...soldPintState, [id]: { ...soldPintState[id], message: newMessage } };
      const emptyMessage = leftPints === 0 ? "Out of Stock!": newMessage;
      const finalUpdateState = { ...updateState, [id]: { ...updateState[id], message: emptyMessage } };
      return finalUpdateState;
    case c.RESTOCK_TAP:
      const newState3 = { ...state };
      const restockTap = newState3[id].pints += 124;  
      const retockedState = { ...newState3, [id]: { ...newState3[id], pints: restockTap, message: 'Enough' } };
      return retockedState;
    default:
      return state;
  }
};