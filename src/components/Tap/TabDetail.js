import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){

  return (
    <>
      <div className="card detail-card">
        <h2>Tap Details</h2>
        <ul>
          <li>Id: {props.tap.id}</li>
          <li>Brand: <strong>{props.tap.brand}</strong></li>
          <li>Name: <strong>{props.tap.name}</strong></li>
          <li>price: <strong>{props.tap.price}</strong> $</li>
          <li>ABV: <strong>{props.tap.abv}</strong> % ABV</li>
          <li>Left Pints: <strong>{props.tap.pints}</strong></li>
          <li>Current Status:
            {props.tap.message === "Enough" && <span className="left-pints-enough">{props.tap.message}</span>}
            {props.tap.message === "Almost Empty" && <span className="left-pints-almost">{props.tap.message}</span>}
            {props.tap.message === "Out of Stock!" && <span className="left-pints-empty">{props.tap.message}</span>}
          </li>
        </ul>
        <div className="card-footer">
          <div className="button-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={() => props.onClickToHome()} className="btn btn-outline-info">Menu</button>
              <button onClick={() => props.onClickRestock(props.tap.id)} className="btn btn-outline-info">Restock</button>
              <button onClick={() => props.onClickEdit(props.tap.id)} className="btn btn-outline-info">Edit</button>
              <button onClick={() => props.onClickDelete(props.tap.id)} className="btn btn-outline-info">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}  

TapDetail.propTypes= {
  tap: PropTypes.object,
  onClickToHome: PropTypes.func,
  onClickRestock: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default TapDetail;