import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapMenu(props) {
  return (
    <>
      <div className="tapMenu">
      <button onClick={() => props.onClickAddNewTap()} className="btn btn-outline-info">Add New Tap</button>
        <div className="row">
          {Object.values(props.tapMenu).map((tap) =>
            <Tap
              key={tap.id}
              id={tap.id}
              img={tap.img}
              name={tap.name}
              brand={tap.brand}
              price={tap.price}
              abv={tap.abv}
              pints={tap.pints}
              message={tap.message}
              whenTabClicked={props.onTabClick}
              whenSellClicked={props.onSellPint}
            />
          )}
        </div>  
      </div>
    </>
  )
}

TapMenu.propTypes = {
  tapMenu: PropTypes.object,
  onTabClick: PropTypes.func,
  onSellPint: PropTypes.func
}

export default TapMenu;