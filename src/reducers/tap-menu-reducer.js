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
      let leftPints = pints;
      leftPints = pints > 0 ? leftPints -= 1 : 0;
      const soldPintState = { ...state, [id]: { ...state[id], pints: leftPints } };
      let newMessage = leftPints < 10 ? "Almost Empty": "Enough";
      const updateState = { ...soldPintState, [id]: { ...soldPintState[id], message: newMessage } };
      let emptyMessage = leftPints === 0 ? "Out of Stock!": newMessage;
      const finalUpdateState = { ...updateState, [id]: { ...updateState[id], message: emptyMessage } };
      return finalUpdateState;

    case c.RESTOCK_TAP:
      let restockTap = pints;
      restockTap += 124;  
      const retockedState = { ...state, [id]: { ...state[id], pints: restockTap, message: 'Enough' } };
      return retockedState;

    default:
      return state;
  }
};