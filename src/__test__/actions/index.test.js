import * as actions from './../../actions';  
import * as c from './../../actions/ActionTypes';

describe('tap menu actions', () => {
  it('addTap should create ADD_TAP action', () => {
    expect(actions.addTap({img: 'imageURL', name:'Lager',brand:'A', price:'10', abv:'10', pints:'124', message:'Enough',id: 1})).toEqual({
      type: c.ADD_TAP,
      img: 'imageURL',
      name:'Lager',
      brand:'A',
      price:'10',
      abv:'10',
      pints:'124',
      message:'Enough',
      id: 1
    });
  });

  it('deleteTap should create DELETE_TAP action', () => {
    expect(actions.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });
});