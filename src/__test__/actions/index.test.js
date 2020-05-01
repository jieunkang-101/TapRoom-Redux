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

  it('selectTap should create SELECT_TAP action', () => {
    expect(actions.selectTap(1)).toEqual({
      type: c.SELECT_TAP,
      id: 1
    })
  });

  it('showTapMenu should create SHOW_TAP_MENU action', () => {
    expect(actions.showTapMenu()).toEqual({
      type: c.SHOW_TAP_MENU
    })
  });

  it('showTapDetail should create SHOW_TAP_DETAIL action', () => {
    expect(actions.showTapDetail()).toEqual({
      type: c.SHOW_TAP_DETAIL
    })
  });

  it('showNewTapForm should create SHOW_NEW_FORM action', () => {
    expect(actions.showNewTapForm()).toEqual({
      type: c.SHOW_NEW_FORM
    })
  });

  it('showEditTapForm should create SHOW_EDIT_FORM action', () => {
    expect(actions.showEditTapForm()).toEqual({
      type: c.SHOW_EDIT_FORM
    })
  });
});