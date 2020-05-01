import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <>
      <div className= "col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src={props.img} height="180" alt="Brand"></img>
          </div>
          <div className="card-body">
            <ul>
              <li>Brand: <strong>{props.brand}</strong></li>
              <li>Name: <strong>{props.name}</strong></li>
              <li>price: <span className="price-color">{props.price}</span> $</li>
              <li>ABV: <strong>{props.abv}</strong> % ABV</li>
              <li>Left Pints: <strong>{props.pints}</strong></li>
              <li>
                {props.message === "Enough" && <p className="left-pints-enough">{props.message}</p>}
                {props.message === "Almost Empty" && <p className="left-pints-almost">{props.message}</p>}
                {props.message === "Out of Stock!" && <p className="left-pints-empty">{props.message}</p>}
              </li>
            </ul>
          </div>
          <div className="card-footer">  
            <div className="button-center">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => props.whenTabClicked(props.id)} className="btn btn-outline-info">Detail</button>
                <button onClick = {() => props.whenSellClicked(props.id)} className="btn btn-outline-info">Sell</button>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    </>
  )
}

Tap.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pints: PropTypes.number,
  message: PropTypes.string,
  id: PropTypes.string,
  whenTabClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Tap;
