import React from "react";
import PropTypes from "prop-types"

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
          <li>Current Status: <strong><span className="left-pints">{props.tap.message}</span></strong></li>
        </ul>
        <div className="card-footer">
          <div className="button-center">
            <div className="btn-group" role="group" aria-label="Basic example">
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
  onClickRestock: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default TapDetail;