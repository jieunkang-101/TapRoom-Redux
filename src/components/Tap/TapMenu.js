import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';

function TapMenu(props) {
  return (
    <>
      <div className="tapMenu">
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
              whenDetailClicked={props.onClickTapDetail}
              whenSellClicked={props.onClickSell}
            />
          )}
        </div>  
      </div>
    </>
  )
}

TapMenu.propTypes = {
  tapMenu: PropTypes.object,
  onClickTapDetail: PropTypes.func,
  onClickSell: PropTypes.func
}

export default TapMenu;