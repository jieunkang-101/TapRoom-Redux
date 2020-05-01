import React from "react";
import PropTypes from "prop-types"

function TapDetail(props){

  return (
    <>
      <div className="card detail-card">
        <h2>Tap Detail</h2>
        <ul>
          <li>Id: {props.id}</li>
          <li>Brand: <strong>{props.brand}</strong></li>
          <li>Name: <strong>{props.name}</strong></li>
          <li>price: <strong>{props.price}</strong> $</li>
          <li>ABV: <strong>{props.abv}</strong> % ABV</li>
          <li>Left Pints: <strong>{props.pints}</strong></li>
          <li>Current Status: <strong><span className="left-pints">{props.message}</span></strong></li>
        </ul>
        <div className="card-footer">
          <div className="button-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={() => props.onRestockTap(props.tap.id)} className="btn btn-outline-info">Restock</button>
              <button onClick={() => props.onEditClick(props.tap.id)} className="btn btn-outline-info">Edit</button>
              <button onClick={() => props.onDeleteTap(props.tap.id)} className="btn btn-outline-info">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}  

TapDetail.propTypes= {
  tap: PropTypes.object,
  onRestockTap: PropTypes.func,
  onEditTap: PropTypes.func,
  onDeleteTap: PropTypes.func
}

export default TapDetail;